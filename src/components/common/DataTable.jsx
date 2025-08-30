import { useState, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, ChevronsUpDown, Filter, Download, MoreHorizontal, Trash2 } from 'lucide-react';
import { useDebounce } from '../../hooks/useDebounce';
import { useClickOutside } from '../../hooks/useClickOutside';
import EmptyState from './EmptyState';
import { exportToCSV } from '../../lib/export';

const DataTable = ({ data: initialData, columns, filterableColumns, searchableColumns }) => {
    const [data, setData] = useState(initialData);
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const [globalFilter, setGlobalFilter] = useState('');
    const debouncedGlobalFilter = useDebounce(globalFilter, 300);
    const [columnFilters, setColumnFilters] = useState({});
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const filterRef = useClickOutside(() => setIsFilterOpen(false));
    const [selectedRows, setSelectedRows] = useState(new Set());

    const filteredData = useMemo(() => {
        let filtered = [...data];

        // Global search
        if (debouncedGlobalFilter) {
            filtered = filtered.filter(item =>
                searchableColumns.some(key =>
                    String(item[key]).toLowerCase().includes(debouncedGlobalFilter.toLowerCase())
                )
            );
        }

        // Column filters
        Object.entries(columnFilters).forEach(([key, value]) => {
            if (value) {
                filtered = filtered.filter(item => String(item[key]).toLowerCase() === value.toLowerCase());
            }
        });

        return filtered;
    }, [data, debouncedGlobalFilter, columnFilters, searchableColumns]);

    const sortedData = useMemo(() => {
        let sortableItems = [...filteredData];
        if (sortConfig.key !== null) {
            sortableItems.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableItems;
    }, [filteredData, sortConfig]);

    const paginatedData = useMemo(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        return sortedData.slice(startIndex, startIndex + itemsPerPage);
    }, [sortedData, currentPage, itemsPerPage]);

    const totalPages = Math.ceil(sortedData.length / itemsPerPage);

    const requestSort = (key) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    const handleColumnFilterChange = (key, value) => {
        setColumnFilters(prev => ({ ...prev, [key]: value }));
    };

    const handleSelectRow = (id) => {
        setSelectedRows(prev => {
            const newSet = new Set(prev);
            if (newSet.has(id)) {
                newSet.delete(id);
            } else {
                newSet.add(id);
            }
            return newSet;
        });
    };

    const handleSelectAll = () => {
        if (selectedRows.size === paginatedData.length) {
            setSelectedRows(new Set());
        } else {
            setSelectedRows(new Set(paginatedData.map(item => item.id)));
        }
    };

    const handleDeleteSelected = () => {
        setData(prev => prev.filter(item => !selectedRows.has(item.id)));
        setSelectedRows(new Set());
    };

    return (
        <div className="bg-surface-primary shadow-lg rounded-xl border border-border-primary overflow-hidden">
            <div className="p-4 flex flex-col sm:flex-row justify-between items-center gap-4">
                <input
                    type="text"
                    placeholder="Search table..."
                    value={globalFilter}
                    onChange={(e) => setGlobalFilter(e.target.value)}
                    className="bg-surface-secondary text-text-primary placeholder-text-secondary rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent-primary w-full sm:w-64"
                />
                <div className="flex items-center gap-2">
                    <div className="relative" ref={filterRef}>
                        <button onClick={() => setIsFilterOpen(!isFilterOpen)} className="flex items-center gap-2 px-4 py-2 bg-surface-secondary hover:bg-border-primary rounded-lg text-sm font-medium transition-colors">
                            <Filter size={16} />
                            Filter
                        </button>
                        <AnimatePresence>
                        {isFilterOpen && (
                            <motion.div 
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="absolute top-full right-0 mt-2 w-64 bg-surface-primary rounded-xl shadow-2xl border border-border-primary z-10 p-4 space-y-4"
                            >
                                <h4 className="font-semibold">Filters</h4>
                                {filterableColumns.map(col => (
                                    <div key={col.key}>
                                        <label className="text-sm text-text-secondary">{col.label}</label>
                                        <select
                                            onChange={(e) => handleColumnFilterChange(col.key, e.target.value)}
                                            className="w-full mt-1 bg-surface-secondary text-text-primary rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-accent-primary"
                                        >
                                            <option value="">All</option>
                                            {[...new Set(data.map(item => item[col.key]))].map(option => (
                                                <option key={option} value={option}>{option}</option>
                                            ))}
                                        </select>
                                    </div>
                                ))}
                            </motion.div>
                        )}
                        </AnimatePresence>
                    </div>
                    <button onClick={() => exportToCSV(sortedData, 'table_data.csv')} className="flex items-center gap-2 px-4 py-2 bg-surface-secondary hover:bg-border-primary rounded-lg text-sm font-medium transition-colors">
                        <Download size={16} />
                        Export
                    </button>
                </div>
            </div>

            {selectedRows.size > 0 && (
                <div className="p-4 bg-accent-primary/10 flex justify-between items-center">
                    <p className="text-sm font-medium text-accent-primary">{selectedRows.size} row(s) selected</p>
                    <button onClick={handleDeleteSelected} className="flex items-center gap-2 px-3 py-1 bg-accent-danger text-white rounded-lg text-sm font-medium hover:bg-accent-danger/80 transition-colors">
                        <Trash2 size={16} />
                        Delete
                    </button>
                </div>
            )}

            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-border-primary">
                    <thead className="bg-surface-secondary">
                        <tr>
                            <th className="px-6 py-3 text-left">
                                <input type="checkbox"
                                    className="rounded border-border-secondary text-accent-primary focus:ring-accent-primary"
                                    checked={selectedRows.size === paginatedData.length && paginatedData.length > 0}
                                    onChange={handleSelectAll}
                                />
                            </th>
                            {columns.map(col => (
                                <th key={col.key} onClick={() => col.sortable && requestSort(col.key)} className={`px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider ${col.sortable ? 'cursor-pointer' : ''}`}>
                                    <div className="flex items-center gap-2">
                                        {col.header}
                                        {col.sortable && (
                                            sortConfig.key === col.key ? (
                                                sortConfig.direction === 'ascending' ? <ChevronUp size={14} /> : <ChevronDown size={14} />
                                            ) : <ChevronsUpDown size={14} />
                                        )}
                                    </div>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border-primary">
                        <AnimatePresence>
                        {paginatedData.length > 0 ? paginatedData.map(item => (
                            <motion.tr 
                                key={item.id} 
                                className={`hover:bg-surface-secondary/50 ${selectedRows.has(item.id) ? 'bg-accent-primary/5' : ''}`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                layout
                            >
                                <td className="px-6 py-4">
                                    <input type="checkbox"
                                        className="rounded border-border-secondary text-accent-primary focus:ring-accent-primary"
                                        checked={selectedRows.has(item.id)}
                                        onChange={() => handleSelectRow(item.id)}
                                    />
                                </td>
                                {columns.map(col => (
                                    <td key={col.key} className="px-6 py-4 whitespace-nowrap text-sm">
                                        {col.render ? col.render(item) : <span className="text-text-primary">{item[col.key]}</span>}
                                    </td>
                                ))}
                            </motion.tr>
                        )) : (
                            <tr>
                                <td colSpan={columns.length + 1}>
                                    <EmptyState title="No Results" message="Your search or filter returned no results." />
                                </td>
                            </tr>
                        )}
                        </AnimatePresence>
                    </tbody>
                </table>
            </div>

            {totalPages > 1 && (
                <div className="p-4 flex justify-between items-center">
                    <span className="text-sm text-text-secondary">
                        Page {currentPage} of {totalPages}
                    </span>
                    <div className="flex gap-2">
                        <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1} className="px-3 py-1 bg-surface-secondary rounded-md text-sm disabled:opacity-50 disabled:cursor-not-allowed">
                            Previous
                        </button>
                        <button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages} className="px-3 py-1 bg-surface-secondary rounded-md text-sm disabled:opacity-50 disabled:cursor-not-allowed">
                            Next
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DataTable;
