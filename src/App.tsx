import React, { useState, useEffect, useMemo } from 'react';
import { 
  Sparkles, Save, Copy, Download, RefreshCcw, Search, ChevronDown, ChevronRight, 
  Trash2, History, Settings2, HelpCircle, Lightbulb, FileText, FileJson
} from 'lucide-react';
import { PROMPT_OPTIONS, CATEGORY_LABELS, Category, EXAMPLE_PROMPTS, OPTION_DESCRIPTIONS } from './data';
import { PromptSelections, generatePromptText, validatePrompt, generateSurpriseMeSelections, pickRandom, exportPromptToFile, cn } from './utils';

// --- Types ---
interface Preset {
  id: string;
  name: string;
  selections: PromptSelections;
  promptText: string;
  createdAt: number;
}

interface HistoryItem {
  id: string;
  promptText: string;
  createdAt: number;
}

type TabType = 'build' | 'presets' | 'history' | 'help' | 'examples';

// --- Main App Component ---
export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('build');
  
  // State: Selections
  const [selections, setSelections] = useState<PromptSelections>({});
  
  // State: Preview Text
  const [isManualEdit, setIsManualEdit] = useState(false);
  const [manualText, setManualText] = useState("");
  
  // State: Global Sidebar Search
  const [searchQuery, setSearchQuery] = useState("");
  
  // State: Accordion open state
  const [openCategories, setOpenCategories] = useState<Record<Category, boolean>>({
    identity: true,
    details: false,
    outfit: false,
    setting: true, // Open a few by default
  } as Record<Category, boolean>);

  // State: Storage
  const [presets, setPresets] = useState<Preset[]>([]);
  const [history, setHistory] = useState<HistoryItem[]>([]);

  // Load from local storage
  useEffect(() => {
    try {
      const savedPresets = localStorage.getItem('meta-ai-presets');
      if (savedPresets) setPresets(JSON.parse(savedPresets));
      const savedHistory = localStorage.getItem('meta-ai-history');
      if (savedHistory) setHistory(JSON.parse(savedHistory));
    } catch (e) {
      console.error("Failed to load generic storage", e);
    }
  }, []);

  // Save to local storage
  useEffect(() => {
    localStorage.setItem('meta-ai-presets', JSON.stringify(presets));
  }, [presets]);
  
  useEffect(() => {
    localStorage.setItem('meta-ai-history', JSON.stringify(history));
  }, [history]);

  // Derived state
  const generatedText = useMemo(() => generatePromptText(selections, false), [selections]);
  const activePromptText = isManualEdit ? manualText : generatedText;
  const validationWarnings = useMemo(() => validatePrompt(selections, activePromptText), [selections, activePromptText]);

  // Handlers
  const handleToggleOption = (category: Category, option: string) => {
    setSelections(prev => {
      const current = prev[category] || [];
      const updated = current.includes(option) 
        ? current.filter(item => item !== option)
        : [...current, option]; // Allowing multi-select!
      return { ...prev, [category]: updated };
    });
    setIsManualEdit(false);
  };

  const handleClearSelections = () => {
    setSelections({});
    setSearchQuery("");
    setIsManualEdit(false);
  };

  const handleSurpriseMe = () => {
    setSelections(generateSurpriseMeSelections());
    setIsManualEdit(false);
  };

  const handleRandomizeAll = () => {
    const newSelections: PromptSelections = {};
    (Object.keys(PROMPT_OPTIONS) as Category[]).forEach(cat => {
      newSelections[cat] = pickRandom(PROMPT_OPTIONS[cat], 1);
    });
    setSelections(newSelections);
    setIsManualEdit(false);
  };

  const handleSaveToHistory = () => {
    if (!activePromptText.trim()) return;
    const newItem: HistoryItem = { id: Date.now().toString(), promptText: activePromptText, createdAt: Date.now() };
    setHistory(prev => [newItem, ...prev].slice(0, 50)); // Keep last 50
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(activePromptText);
    handleSaveToHistory();
    alert("Prompt copied to clipboard!");
  };

  const handleSavePreset = () => {
    if (!activePromptText.trim()) return;
    const name = prompt("Enter a name for this preset:") || `Preset ${presets.length + 1}`;
    const newPreset: Preset = {
      id: Date.now().toString(),
      name,
      selections: { ...selections },
      promptText: activePromptText,
      createdAt: Date.now()
    };
    setPresets(prev => [newPreset, ...prev]);
    alert("Preset saved!");
  };

  const loadPreset = (preset: Preset) => {
    setSelections(preset.selections);
    setManualText(preset.promptText);
    setIsManualEdit(true); // Treat loading preset as manual override to preserve exact string just in case
    setActiveTab('build');
  };

  const toggleCategory = (cat: Category) => {
    setOpenCategories(prev => ({ ...prev, [cat]: !prev[cat] }));
  };

  // UI rendering arrays
  const categories = Object.keys(PROMPT_OPTIONS) as Category[];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 relative overflow-hidden via-[#f0f9ff] to-[#f5f3ff] text-slate-800 font-sans">
      {/* Background Decorative Blobs */}
      <div className="pointer-events-none absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-300 blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-300 blur-[120px]" />
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex flex-col min-h-[100dvh] md:h-[100dvh] relative z-10">
        
        {/* Header */}
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 pb-4 border-b border-white/40 shadow-sm backdrop-blur-sm rounded-2xl p-4 bg-white/40 shrink-0">
          <div className="flex items-center gap-3 mb-4 sm:mb-0">
            <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg text-white">
              <Sparkles size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-purple-700 tracking-tight">
                Meta AI Prompt Composer
              </h1>
              <p className="text-sm text-slate-500 font-medium">Optimize your "Imagine me" generations.</p>
            </div>
          </div>
          
          {/* Navigation Tabs */}
          <nav className="flex flex-wrap gap-2">
            {[
              { id: 'build', label: 'Build Prompt', icon: <Settings2 size={16} /> },
              { id: 'presets', label: 'Presets', icon: <Save size={16} /> },
              { id: 'history', label: 'History', icon: <History size={16} /> },
              { id: 'examples', label: 'Examples', icon: <Lightbulb size={16} /> },
              { id: 'help', label: 'Help', icon: <HelpCircle size={16} /> },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as TabType)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 border",
                  activeTab === tab.id 
                    ? "bg-white shadow-md border-blue-100 text-blue-700" 
                    : "bg-white/40 border-transparent text-slate-600 hover:bg-white/80 hover:shadow-sm"
                )}
              >
                {tab.icon}
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </nav>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col md:flex-row gap-6 md:min-h-0 md:overflow-hidden pb-10 md:pb-0">
          
          {/* --- BUILD TAB --- */}
          {activeTab === 'build' && (
            <>
              {/* Left Panel: Inputs */}
              <div className="w-full md:w-1/3 lg:w-1/4 flex flex-col bg-white/60 backdrop-blur-md rounded-2xl border border-white md:max-h-full md:overflow-hidden shadow-sm flex-shrink-0 order-2 md:order-1">
                <div className="p-4 border-b border-slate-100 bg-white/50 space-y-3">
                  <div className="flex gap-2">
                    <button onClick={handleSurpriseMe} className="flex-1 py-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-lg text-sm font-medium transition-all shadow-sm flex items-center justify-center gap-2">
                      <Sparkles size={16}/> Surprise Me
                    </button>
                    <button onClick={handleClearSelections} className="px-3 py-2 bg-white hover:bg-slate-50 text-slate-600 border border-slate-200 rounded-lg text-sm font-medium transition-all" title="Clear all selections">
                      <Trash2 size={16} />
                    </button>
                  </div>
                  
                  {/* Global Search */}
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                    <input 
                      type="text" 
                      placeholder="Search options..." 
                      value={searchQuery}
                      onChange={(e) => {
                         setSearchQuery(e.target.value);
                         // Open all categories if searching
                         if (e.target.value.length > 1) {
                           const allOpen = categories.reduce((acc, cat) => ({...acc, [cat]: true}), {} as Record<Category, boolean>);
                           setOpenCategories(allOpen);
                         }
                      }}
                      className="w-full pl-9 pr-4 py-2 bg-white/80 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-sm transition-shadow"
                    />
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
                  {categories.map((cat) => {
                    const options = PROMPT_OPTIONS[cat];
                    const filteredOptions = searchQuery 
                      ? options.filter(o => o.toLowerCase().includes(searchQuery.toLowerCase()))
                      : options;

                    if (searchQuery && filteredOptions.length === 0) return null;

                    const isOpen = openCategories[cat];
                    const selectedCount = selections[cat]?.length || 0;

                    return (
                      <div key={cat} className="border border-white bg-white/50 rounded-xl overflow-hidden shadow-sm transition-all">
                        <button 
                          onClick={() => toggleCategory(cat)}
                          className="w-full flex items-center justify-between p-3 hover:bg-white/80 transition-colors"
                        >
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-sm text-slate-700">{CATEGORY_LABELS[cat]}</span>
                            {selectedCount > 0 && (
                              <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-0.5 rounded-full">
                                {selectedCount}
                              </span>
                            )}
                          </div>
                          {isOpen ? <ChevronDown size={16} className="text-slate-400" /> : <ChevronRight size={16} className="text-slate-400" />}
                        </button>
                        
                        {isOpen && (
                          <div className="p-3 pt-0 flex flex-wrap gap-2 border-t border-slate-100/50 bg-white/30">
                            {filteredOptions.map(option => {
                              const isSelected = selections[cat]?.includes(option);
                              return (
                                <button
                                  key={option}
                                  onClick={() => handleToggleOption(cat, option)}
                                  className={cn(
                                    "px-3 py-1.5 rounded-lg transition-all duration-200 border flex flex-col justify-center items-start text-left min-h-[36px]",
                                    isSelected 
                                      ? "bg-blue-600 text-white border-blue-600 shadow-sm shadow-blue-500/20" 
                                      : "bg-white text-slate-600 border-slate-200 hover:border-blue-300 hover:bg-blue-50"
                                  )}
                                >
                                  <span className="text-xs font-medium">{option}</span>
                                  {OPTION_DESCRIPTIONS[option] && (
                                    <span className={cn("text-[10px] leading-tight mt-0.5 max-w-[150px] whitespace-normal sm:max-w-xs", isSelected ? "text-blue-100" : "text-slate-400 font-normal")}>
                                      {OPTION_DESCRIPTIONS[option]}
                                    </span>
                                  )}
                                </button>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Center Panel: Live Preview & Actions */}
              <div className="flex-1 flex flex-col gap-4 md:overflow-hidden order-1 md:order-2">
                <div className="flex-1 bg-white/90 md:bg-white/60 backdrop-blur-2xl rounded-2xl border border-white shadow-lg md:shadow-sm p-4 sm:p-6 flex flex-col sticky top-2 z-30 md:static">
                  <div className="flex justify-between items-center mb-2 md:mb-4">
                    <h2 className="text-base sm:text-lg font-bold text-slate-800 flex items-center gap-2">
                      Live Preview
                      <span className="text-[10px] sm:text-xs font-normal text-slate-500 bg-slate-100 px-2 py-1 rounded-md hidden sm:inline-block">
                        {activePromptText.length} chars
                      </span>
                    </h2>
                    <button 
                      onClick={() => {
                        handleRandomizeAll();
                        // open some categories for visual feedback
                        setOpenCategories(prev => ({...prev, identity: true, setting: true}));
                      }} 
                      className="text-xs font-bold uppercase tracking-wider text-purple-600 hover:text-purple-800 flex items-center gap-1 bg-purple-50 md:bg-transparent px-2 md:px-0 py-1 md:py-0 rounded-md"
                    >
                      <RefreshCcw size={14} /> Mix All
                    </button>
                  </div>
                  
                  <textarea
                    readOnly={!isManualEdit}
                    value={activePromptText}
                    onChange={(e) => {
                      setIsManualEdit(true);
                      setManualText(e.target.value);
                    }}
                    placeholder="Select options on the left to start building your prompt..."
                    className={cn(
                      "w-full h-28 md:flex-1 md:h-auto p-3 sm:p-6 text-base sm:text-lg font-medium leading-snug sm:leading-relaxed rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all shadow-inner",
                      isManualEdit ? "bg-white border-2 border-blue-200 text-slate-800" : "bg-white/50 border border-slate-200 text-slate-700"
                    )}
                  />
                  {!isManualEdit && activePromptText && (
                      <div className="mt-1 text-right">
                         <button onClick={() => { setIsManualEdit(true); setManualText(activePromptText); }} className="text-[10px] sm:text-xs text-blue-600 hover:underline">Click here to edit manually</button>
                      </div>
                  )}

                  {/* Actions */}
                  <div className="mt-3 md:mt-6 flex flex-wrap gap-2 sm:gap-3">
                    <button 
                      onClick={handleCopy}
                      className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base font-semibold rounded-xl transition-all shadow-md shadow-blue-500/20 active:scale-95"
                    >
                      <Copy size={16} /> Copy
                    </button>
                    <button 
                      onClick={handleSavePreset}
                      className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 text-sm sm:text-base font-semibold rounded-xl transition-all shadow-sm active:scale-95"
                    >
                      <Save size={16} /> Save<span className="hidden sm:inline"> Preset</span>
                    </button>
                    
                    <div className="w-full sm:w-auto flex flex-1 sm:pr-4 sm:ml-auto gap-2">
                       <button onClick={() => exportPromptToFile(activePromptText, 'txt')} className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-3 py-2 bg-white hover:bg-slate-50 text-slate-600 border border-slate-200 rounded-xl text-sm transition-all" title="Export as TXT">
                         <FileText size={16} /> TXT
                       </button>
                    </div>
                  </div>
                </div>

                {/* Validation Panel */}
                <div className="bg-white/60 backdrop-blur-md rounded-2xl border border-white shadow-sm p-4 overflow-y-auto max-h-48 md:block order-2">
                  <h3 className="text-sm font-bold text-slate-500 mb-3 uppercase tracking-wider">AI Check</h3>
                  <div className="space-y-2">
                    {validationWarnings.map((warning, i) => (
                      <div 
                        key={i} 
                        className={cn(
                          "px-4 py-3 rounded-xl border text-sm font-medium flex items-start gap-3",
                          warning.type === 'error' && "bg-red-50 border-red-200 text-red-800",
                          warning.type === 'warning' && "bg-amber-50 border-amber-200 text-amber-800",
                          warning.type === 'success' && "bg-emerald-50 border-emerald-200 text-emerald-800"
                        )}
                      >
                         <div>
                           {warning.type === 'error' && <span className="font-bold">Error: </span>}
                           {warning.type === 'warning' && <span className="font-bold">Tip: </span>}
                           {warning.type === 'success' && <Sparkles size={16} className="inline mr-1 -mt-0.5" />}
                           {warning.message}
                         </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}

          {/* --- PRESETS TAB --- */}
          {activeTab === 'presets' && (
            <div className="w-full bg-white/60 backdrop-blur-md rounded-2xl border border-white shadow-sm p-6 overflow-y-auto">
              <h2 className="text-2xl font-bold mb-6">Saved Presets</h2>
              {presets.length === 0 ? (
                <div className="text-center py-12 text-slate-500">
                  <Save size={48} className="mx-auto mb-4 opacity-20" />
                  <p>You haven't saved any presets yet.</p>
                  <p className="text-sm mt-2">Build a prompt and click "Save Preset" to keep it here.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {presets.map(preset => (
                    <div key={preset.id} className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow group relative">
                      <h3 className="font-bold text-lg text-slate-800 mb-2">{preset.name}</h3>
                      <p className="text-sm text-slate-600 line-clamp-3 mb-4">{preset.promptText}</p>
                      
                      <div className="flex gap-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                         <button 
                           onClick={() => loadPreset(preset)}
                           className="flex-1 bg-blue-50 text-blue-700 font-medium py-2 rounded-lg text-sm hover:bg-blue-100 transition-colors"
                         >
                           Load
                         </button>
                         <button 
                           onClick={() => setPresets(prev => prev.filter(p => p.id !== preset.id))}
                           className="bg-red-50 text-red-600 p-2 rounded-lg hover:bg-red-100 transition-colors"
                         >
                           <Trash2 size={16} />
                         </button>
                      </div>
                      <div className="absolute top-4 right-4 text-xs text-slate-400">
                        {new Date(preset.createdAt).toLocaleDateString()}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* --- HISTORY TAB --- */}
          {activeTab === 'history' && (
            <div className="w-full bg-white/60 backdrop-blur-md rounded-2xl border border-white shadow-sm p-6 overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Prompt History</h2>
                <button 
                  onClick={() => { if(confirm("Clear history?")) setHistory([]) }}
                  className="text-red-500 text-sm font-medium hover:underline"
                >
                  Clear History
                </button>
              </div>
              
              {history.length === 0 ? (
                <div className="text-center py-12 text-slate-500">
                  <History size={48} className="mx-auto mb-4 opacity-20" />
                  <p>Your history is empty.</p>
                  <p className="text-sm mt-2">Copied prompts will appear here automatically.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {history.map(item => (
                    <div key={item.id} className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-slate-800">{item.promptText}</p>
                        <p className="text-xs text-slate-500 mt-1">{new Date(item.createdAt).toLocaleString()}</p>
                      </div>
                      <div className="flex gap-2">
                        <button 
                           onClick={() => {
                             navigator.clipboard.writeText(item.promptText);
                             alert("Copied!");
                           }}
                           className="flex-shrink-0 p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors border border-slate-200"
                           title="Copy Again"
                         >
                           <Copy size={16} />
                         </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* --- EXAMPLES TAB --- */}
          {activeTab === 'examples' && (
            <div className="w-full bg-white/60 backdrop-blur-md rounded-2xl border border-white shadow-sm p-6 overflow-y-auto">
               <h2 className="text-2xl font-bold mb-6">Curated Examples</h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {EXAMPLE_PROMPTS.map((prompt, i) => (
                   <div key={i} className="bg-white border text-left border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col h-full">
                     <p className="text-lg font-medium italic text-slate-700 flex-1 mb-6">"{prompt}"</p>
                     <button 
                        onClick={() => {
                          setManualText(prompt);
                          setIsManualEdit(true);
                          setActiveTab('build');
                        }}
                        className="self-start text-blue-600 font-semibold flex items-center gap-2 hover:underline"
                     >
                        Try this in Builder <ChevronRight size={16}/>
                     </button>
                   </div>
                 ))}
               </div>
            </div>
          )}

          {/* --- HELP TAB --- */}
          {activeTab === 'help' && (
            <div className="w-full bg-white/60 backdrop-blur-md rounded-2xl border border-white shadow-sm p-8 overflow-y-auto max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">How to use "Imagine me"</h2>
              
              <div className="prose prose-slate max-w-none">
                <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mb-8">
                  <h3 className="text-lg font-bold text-blue-900 mt-0">What is this?</h3>
                  <p className="text-blue-800 mb-0">
                    This composer helps you build highly effective, descriptive prompts specifically optimized for Meta AI's "Imagine me" feature. By structuring your requests, you get vastly better, more consistent image generation results.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="font-bold text-lg mb-3 flex items-center gap-2"><Sparkles className="text-purple-500"/> Why Specificity Matters</h4>
                    <p className="text-slate-600 text-sm">
                      Meta AI works best when given a clear identity, a defined setting, and artistic direction. A prompt like <em>"Imagine me"</em> rarely yields great results compared to <em>"Imagine me as a cowboy on a desert road at sunset, cinematic lighting."</em>
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-3 flex items-center gap-2"><Settings2 className="text-blue-500"/> Dropdown Combinations</h4>
                    <p className="text-slate-600 text-sm">
                      Mix and match from the left sidebar to build a comprehensive description. The live preview automatically formats your selections into a natural sentence that Meta AI understands perfectly.
                    </p>
                  </div>
                </div>

                <hr className="my-8 border-slate-200" />

                <h3 className="font-bold text-xl mb-4">Common Mistakes to Avoid</h3>
                <ul className="space-y-3 list-none pl-0">
                  {[
                    "Using too many conflicting styles (e.g., 'watercolor' AND 'photorealistic').",
                    "Writing prompts longer than 500 characters. Meta AI might drop the end of the prompt.",
                    "Using overly abstract concepts without a physical foundation (e.g., 'Imagine me as the concept of time').",
                    "Forgetting to specify lighting. Lighting drastically changes the final image quality."
                  ].map((tip, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1 bg-red-100 text-red-600 rounded-full p-1"><ChevronRight size={12}/></div>
                      <span className="text-slate-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

        </main>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(148, 163, 184, 0.3);
          border-radius: 10px;
        }
        .custom-scrollbar:hover::-webkit-scrollbar-thumb {
          background-color: rgba(148, 163, 184, 0.5);
        }
      `}</style>
    </div>
  );
}
