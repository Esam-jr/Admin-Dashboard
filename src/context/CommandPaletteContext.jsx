import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CommandPaletteContext = createContext();

export const useCommandPalette = () => useContext(CommandPaletteContext);

const commands = [
    { name: 'Overview', href: '/', section: 'Navigation' },
    { name: 'Products', href: '/products', section: 'Navigation' },
    { name: 'Users', href: '/users', section: 'Navigation' },
    { name: 'Sales', href: '/sales', section: 'Navigation' },
    { name: 'Orders', href: '/orders', section: 'Navigation' },
    { name: 'Analytics', href: '/analystics', section: 'Navigation' },
    { name: 'Settings', href: '/settings', section: 'Navigation' },
    { name: 'Toggle Theme', action: 'toggleTheme', section: 'Actions' },
];

export const CommandPaletteProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const handleKeyDown = (event) => {
            if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
                event.preventDefault();
                setIsOpen(prev => !prev);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const openPalette = () => setIsOpen(true);
    const closePalette = () => {
        setIsOpen(false);
        setQuery('');
    };

    const runCommand = (command) => {
        if (command.href) {
            navigate(command.href);
        }
        // Action commands can be handled here in the future
        closePalette();
    };

    const filteredCommands = query === ''
        ? commands
        : commands.filter(command =>
            command.name.toLowerCase().includes(query.toLowerCase())
        );

    const value = {
        isOpen,
        openPalette,
        closePalette,
        query,
        setQuery,
        filteredCommands,
        runCommand
    };

    return (
        <CommandPaletteContext.Provider value={value}>
            {children}
        </CommandPaletteContext.Provider>
    );
};
