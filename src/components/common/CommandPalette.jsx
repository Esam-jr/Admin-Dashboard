import { Fragment, useState, useEffect } from 'react';
import { Dialog, Combobox, Transition } from '@headlessui/react';
import { Search, File, ChevronsRight } from 'lucide-react';
import { useCommandPalette } from '../../context/CommandPaletteContext';

export default function CommandPalette() {
  const { isOpen, closePalette, query, setQuery, filteredCommands, runCommand } = useCommandPalette();
  const [activeOption, setActiveOption] = useState(null);

  useEffect(() => {
    if (!isOpen) {
      setQuery('');
    }
  }, [isOpen, setQuery]);
  
  const groupedCommands = filteredCommands.reduce((groups, command) => {
    const section = command.section || 'General';
    if (!groups[section]) {
      groups[section] = [];
    }
    groups[section].push(command);
    return groups;
  }, {});

  return (
    <Transition.Root show={isOpen} as={Fragment} afterLeave={() => setQuery('')}>
      <Dialog as="div" className="relative z-50" onClose={closePalette}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="mx-auto max-w-xl transform divide-y divide-border-primary overflow-hidden rounded-xl bg-surface-primary shadow-2xl ring-1 ring-border-secondary transition-all">
              <Combobox onChange={(command) => runCommand(command)}>
                <div className="relative">
                  <Search
                    className="pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-text-secondary"
                    aria-hidden="true"
                  />
                  <Combobox.Input
                    className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-text-primary placeholder:text-text-secondary focus:ring-0 sm:text-sm"
                    placeholder="Search for pages or actions..."
                    onChange={(event) => setQuery(event.target.value)}
                    onBlur={() => setQuery('')}
                  />
                </div>

                {filteredCommands.length > 0 && (
                  <Combobox.Options static className="max-h-80 scroll-py-2 divide-y divide-border-primary overflow-y-auto">
                    {Object.entries(groupedCommands).map(([section, commands]) => (
                      <div key={section} className="py-2">
                        <h2 className="px-4 text-xs font-semibold text-text-secondary">{section}</h2>
                        {commands.map((command) => (
                          <Combobox.Option
                            key={command.name}
                            value={command}
                            className={({ active }) =>
                              `flex cursor-pointer items-center px-4 py-2 ${active ? 'bg-accent-primary/10 text-accent-primary' : ''}`
                            }
                          >
                            {({ active }) => (
                              <>
                                <File className={`mr-3 h-5 w-5 ${active ? 'text-accent-primary' : 'text-text-secondary'}`} aria-hidden="true" />
                                <span className="flex-auto truncate">{command.name}</span>
                                {active && <ChevronsRight className="ml-3 h-5 w-5 flex-none text-text-secondary" aria-hidden="true" />}
                              </>
                            )}
                          </Combobox.Option>
                        ))}
                      </div>
                    ))}
                  </Combobox.Options>
                )}

                {query !== '' && filteredCommands.length === 0 && (
                  <p className="p-4 text-sm text-text-secondary">No results found.</p>
                )}
              </Combobox>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
