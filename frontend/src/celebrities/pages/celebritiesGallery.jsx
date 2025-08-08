import React, { useEffect, useMemo, useRef, useState } from 'react';
import './celebritiesGallery.css';

const LOCAL_KEY = 'cey_gallery_v1';

function readFilesAsDataUrls(files) {
  const readers = Array.from(files).map(
    (file) =>
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve({
          id: `${Date.now()}_${Math.random().toString(36).slice(2)}`,
          name: file.name.replace(/\.[^.]+$/, ''),
          role: 'Uncategorized',
          description: 'Add a description for this image...',
          src: reader.result,
          createdAt: new Date().toISOString(),
          tags: [],
        });
        reader.onerror = reject;
        reader.readAsDataURL(file);
      })
  );
  return Promise.all(readers);
}

const CelebritiesGallery = () => {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState('');
  const [roleFilter, setRoleFilter] = useState('All');
  const [preview, setPreview] = useState(null);
  const [editing, setEditing] = useState(null);
  const [viewMode, setViewMode] = useState('grid'); // grid, masonry, list
  const [sortBy, setSortBy] = useState('newest'); // newest, oldest, name, likes
  const [selectedItems, setSelectedItems] = useState(new Set());
  const [isSelectionMode, setIsSelectionMode] = useState(false);
  const inputRef = useRef(null);
  const dropRef = useRef(null);

  // Load/save localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem(LOCAL_KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch (e) {
      console.warn('Failed to load gallery', e);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_KEY, JSON.stringify(items));
    } catch (e) {
      // ignore quota errors
    }
  }, [items]);

  // Drag & drop
  useEffect(() => {
    const el = dropRef.current;
    if (!el) return;
    const prevent = (e) => {
      e.preventDefault();
      e.stopPropagation();
    };
    const onDrop = async (e) => {
      prevent(e);
      const files = e.dataTransfer.files;
      if (files && files.length) {
        const newOnes = await readFilesAsDataUrls(files);
        setItems((prev) => [...newOnes, ...prev]);
      }
      el.classList.remove('is-dragover');
    };
    const onDragOver = (e) => {
      prevent(e);
      el.classList.add('is-dragover');
    };
    const onDragLeave = (e) => {
      prevent(e);
      el.classList.remove('is-dragover');
    };
    el.addEventListener('dragover', onDragOver);
    el.addEventListener('drop', onDrop);
    el.addEventListener('dragleave', onDragLeave);
    el.addEventListener('dragend', onDragLeave);
    return () => {
      el.removeEventListener('dragover', onDragOver);
      el.removeEventListener('drop', onDrop);
      el.removeEventListener('dragleave', onDragLeave);
      el.removeEventListener('dragend', onDragLeave);
    };
  }, []);

  const rolesFromItems = useMemo(() => {
    const set = new Set(items.map((i) => i.role).filter(Boolean));
    return ['All', ...Array.from(set).filter((r) => r !== 'All')];
  }, [items]);

  const sortedAndFiltered = useMemo(() => {
    let result = items.filter((i) => {
      const okRole = roleFilter === 'All' || i.role === roleFilter;
      const q = search.trim().toLowerCase();
      const okSearch = !q || i.name.toLowerCase().includes(q) || (i.role || '').toLowerCase().includes(q);
      return okRole && okSearch;
    });

    // Sort items
    result.sort((a, b) => {
      switch (sortBy) {
        case 'oldest':
          return new Date(a.createdAt) - new Date(b.createdAt);
        case 'name':
          return a.name.localeCompare(b.name);
        case 'newest':
        default:
          return new Date(b.createdAt) - new Date(a.createdAt);
      }
    });

    return result;
  }, [items, roleFilter, search, sortBy]);

  const handleAddFiles = async (e) => {
    const files = e.target.files;
    if (!files || !files.length) return;
    const newOnes = await readFilesAsDataUrls(files);
    setItems((prev) => [...newOnes, ...prev]);
    if (inputRef.current) inputRef.current.value = '';
  };

  const removeItem = (id) => setItems((prev) => prev.filter((i) => i.id !== id));

  const startEdit = (item) => setEditing({ ...item });
  const updateEditing = (field, value) => setEditing((e) => ({ ...e, [field]: value }));
  const saveEditing = () => {
    setItems((prev) => prev.map((i) => (i.id === editing.id ? editing : i)));
    setEditing(null);
  };

  const toggleSelection = (id) => {
    setSelectedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const selectAll = () => {
    setSelectedItems(new Set(sortedAndFiltered.map(item => item.id)));
  };

  const clearSelection = () => {
    setSelectedItems(new Set());
    setIsSelectionMode(false);
  };

  const deleteSelected = () => {
    setItems(prev => prev.filter(item => !selectedItems.has(item.id)));
    clearSelection();
  };

  return (
    <section className="cey-gallery">
      <header className="cey-gallery__header">
        <div className="cey-gallery__titles">
          <h2 className="cey-gallery__title">Celebrities Gallery</h2>
          <p className="cey-gallery__subtitle">Upload, curate and showcase your best moments</p>
        </div>
        <div className="cey-gallery__actions">
          <div className="cey-input-wrap">
            <i className="fa-solid fa-search" />
            <input
              type="text"
              placeholder="Search by name or role"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          
          <button className="cey-btn cey-btn--gold" onClick={() => inputRef.current?.click()}>
            <i className="fa-solid fa-upload" /> Upload
          </button>
          <input ref={inputRef} type="file" accept="image/*" multiple onChange={handleAddFiles} hidden />
        </div>
      </header>

      <div ref={dropRef} className="cey-drop">
        <i className="fa-solid fa-cloud-arrow-up" />
        <p>Drag & Drop images here, or click Upload</p>
      </div>

      {/* Enhanced Controls Bar */}
      <div className="cey-controls">
        <div className="cey-controls__left">
          <div className="cey-select-wrap">
            <i className="fa-solid fa-filter" />
            <select value={roleFilter} onChange={(e) => setRoleFilter(e.target.value)}>
              {rolesFromItems.map((role) => (
                <option key={role} value={role}>
                  {role} {role !== 'All' && `(${items.filter(i => i.role === role).length})`}
                </option>
              ))}
            </select>
          </div>
          
          <div className="cey-select-wrap">
            <i className="fa-solid fa-sort" />
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="name">Name A-Z</option>
            </select>
          </div>

          <div className="cey-stats">
            <span className="cey-stat">
              <i className="fa-solid fa-images" />
              {sortedAndFiltered.length} items
            </span>
          </div>
        </div>

        <div className="cey-controls__right">
          <div className="cey-view-toggle">
            <button 
              className={`cey-view-btn ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => setViewMode('grid')}
              title="Grid View"
            >
              <i className="fa-solid fa-grip" />
            </button>
            <button 
              className={`cey-view-btn ${viewMode === 'masonry' ? 'active' : ''}`}
              onClick={() => setViewMode('masonry')}
              title="Masonry View"
            >
              <i className="fa-solid fa-grip-vertical" />
            </button>
            <button 
              className={`cey-view-btn ${viewMode === 'list' ? 'active' : ''}`}
              onClick={() => setViewMode('list')}
              title="List View"
            >
              <i className="fa-solid fa-list" />
            </button>
          </div>

          <button 
            className={`cey-btn ${isSelectionMode ? 'cey-btn--active' : ''}`}
            onClick={() => setIsSelectionMode(!isSelectionMode)}
          >
            <i className="fa-solid fa-check-square" />
            Select
          </button>
        </div>
      </div>

      {/* Selection Controls */}
      {isSelectionMode && (
        <div className="cey-selection-bar">
          <div className="cey-selection-info">
            <span>{selectedItems.size} selected</span>
          </div>
          <div className="cey-selection-actions">
            <button className="cey-btn cey-btn--small" onClick={selectAll}>
              <i className="fa-solid fa-check-double" /> Select All
            </button>
            <button className="cey-btn cey-btn--small" onClick={clearSelection}>
              <i className="fa-solid fa-times" /> Clear
            </button>
            {selectedItems.size > 0 && (
              <button className="cey-btn cey-btn--danger cey-btn--small" onClick={deleteSelected}>
                <i className="fa-solid fa-trash" /> Delete Selected
              </button>
            )}
          </div>
        </div>
      )}

      <div className={`cey-grid cey-grid--${viewMode}`}>
        {sortedAndFiltered.map((item) => (
          <article key={item.id} className={`cey-card ${selectedItems.has(item.id) ? 'is-selected' : ''}`}>
            {isSelectionMode && (
              <div className="cey-card__selection">
                <button 
                  className={`cey-selection-checkbox ${selectedItems.has(item.id) ? 'checked' : ''}`}
                  onClick={() => toggleSelection(item.id)}
                >
                  <i className="fa-solid fa-check" />
                </button>
              </div>
            )}
            
            <div className="cey-card__image-container">
              <img src={item.src} alt={item.name} onClick={() => !isSelectionMode && setPreview(item)} />
              <div className="cey-card__gradient" />
            </div>
            
            <div className="cey-card__content">
              <div className="cey-card__header">
                <div className="cey-card__title-area">
                  <h3 className="cey-card__title" title={item.name}>{item.name}</h3>
                  <span className="cey-chip cey-chip--modern">{item.role || 'Uncategorized'}</span>
                </div>
                <div className="cey-card__meta">
                  <time className="cey-card__date">
                    <i className="fa-regular fa-calendar" />
                    {new Date(item.createdAt).toLocaleDateString()}
                  </time>
                </div>
              </div>
              
              <div className="cey-card__actions">
                <button 
                  className="cey-action-btn cey-action-btn--primary" 
                  onClick={() => setPreview(item)} 
                  title="View Full Size"
                >
                  <i className="fa-solid fa-expand" />
                  <span>View</span>
                </button>
                <button 
                  className="cey-action-btn cey-action-btn--secondary" 
                  onClick={() => startEdit(item)} 
                  title="Edit Details"
                >
                  <i className="fa-solid fa-pen" />
                  <span>Edit</span>
                </button>
                <button 
                  className="cey-action-btn cey-action-btn--danger" 
                  onClick={() => removeItem(item.id)} 
                  title="Delete"
                >
                  <i className="fa-solid fa-trash" />
                  <span>Delete</span>
                </button>
              </div>
            </div>
          </article>
        ))}
        
        {sortedAndFiltered.length === 0 && (
          <div className="cey-empty">
            <div className="cey-empty__icon">
              <i className="fa-regular fa-images" />
            </div>
            <div className="cey-empty__content">
              <h3>No images found</h3>
              <p>
                {search || roleFilter !== 'All' 
                  ? 'Try adjusting your search or filter criteria' 
                  : 'Upload some images to get started with your gallery'
                }
              </p>
              {(!search && roleFilter === 'All') && (
                <button className="cey-btn cey-btn--gold" onClick={() => inputRef.current?.click()}>
                  <i className="fa-solid fa-upload" /> Upload Images
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Enhanced Lightbox */}
      {preview && (
        <div className="cey-lightbox" onClick={() => setPreview(null)}>
          <div className="cey-lightbox__backdrop" />
          <div className="cey-lightbox__container" onClick={(e) => e.stopPropagation()}>
            <div className="cey-lightbox__image-area">
              <img src={preview.src} alt={preview.name} />
            </div>
            <div className="cey-lightbox__sidebar">
              <header className="cey-lightbox__header">
                <div className="cey-lightbox__title-area">
                  <h2>{preview.name}</h2>
                  <span className="cey-chip cey-chip--large">{preview.role}</span>
                </div>
                <button className="cey-icon-btn cey-icon-btn--close" onClick={() => setPreview(null)}>
                  <i className="fa-solid fa-xmark" />
                </button>
              </header>
              
                             <div className="cey-lightbox__content">
                 <div className="cey-lightbox__stats">
                   <div className="cey-stat-item">
                     <i className="fa-regular fa-calendar" />
                     <span>{new Date(preview.createdAt).toLocaleDateString()}</span>
                   </div>
                 </div>
                 
                 <div className="cey-lightbox__description">
                   <h4 className="cey-lightbox__description-title">
                     <i className="fa-solid fa-align-left" />
                     About this image
                   </h4>
                   <p className="cey-lightbox__description-text">
                     {preview.description || 'No description available for this image.'}
                   </p>
                 </div>
                 
                 <div className="cey-lightbox__actions">
                   <button className="cey-btn cey-btn--outline cey-btn--full" onClick={() => startEdit(preview)}>
                     <i className="fa-solid fa-pen" />
                     Edit Details
                   </button>
                 </div>
               </div>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Edit Modal */}
      {editing && (
        <div className="cey-modal" onClick={() => setEditing(null)}>
          <div className="cey-modal__backdrop" />
          <div className="cey-modal__dialog cey-modal__dialog--enhanced" onClick={(e) => e.stopPropagation()}>
            <header className="cey-modal__header">
              <div>
                <h3 className="cey-modal__title">Edit Celebrity Details</h3>
                <p className="cey-modal__subtitle">Update the information for this image</p>
              </div>
              <button className="cey-icon-btn cey-icon-btn--close" onClick={() => setEditing(null)}>
                <i className="fa-solid fa-xmark" />
              </button>
            </header>
            
            <div className="cey-modal__body">
              <div className="cey-modal__preview">
                <img src={editing.src} alt={editing.name} />
              </div>
              
              <div className="cey-modal__form">
                <div className="cey-field-group">
                  <label className="cey-field">
                    <span className="cey-field__label">
                      <i className="fa-solid fa-user" />
                      Full Name
                    </span>
                    <input 
                      className="cey-input cey-input--enhanced"
                      value={editing.name} 
                      onChange={(e) => updateEditing('name', e.target.value)}
                      placeholder="Enter celebrity name"
                    />
                  </label>
                  
                                     <label className="cey-field">
                     <span className="cey-field__label">
                       <i className="fa-solid fa-briefcase" />
                       Role/Category
                     </span>
                     <div className="cey-select-enhanced">
                       <select 
                         value={editing.role} 
                         onChange={(e) => updateEditing('role', e.target.value)}
                       >
                         <option value="">Select a category</option>
                         {rolesFromItems.filter((r) => r !== 'All').map((r) => (
                           <option key={r} value={r}>{r}</option>
                         ))}
                         <option value="Actor">Actor</option>
                         <option value="Singer">Singer</option>
                         <option value="Director">Director</option>
                         <option value="Model">Model</option>
                         <option value="Athlete">Athlete</option>
                         <option value="Other">Other</option>
                       </select>
                       <i className="fa-solid fa-chevron-down" />
                     </div>
                   </label>
                   
                   <label className="cey-field">
                     <span className="cey-field__label">
                       <i className="fa-solid fa-align-left" />
                       Description
                     </span>
                     <textarea 
                       className="cey-input--enhanced"
                       value={editing.description || ''} 
                       onChange={(e) => updateEditing('description', e.target.value)}
                       rows="4"
                       placeholder="Add a detailed description for this image..."
                     />
                   </label>
                </div>
                
                <div className="cey-field">
                  <span className="cey-field__label">
                    <i className="fa-solid fa-chart-simple" />
                    Added Date
                  </span>
                  <div className="cey-stats-display">
                    <div className="cey-stat-card">
                      <i className="fa-regular fa-calendar" />
                      <span>Added {new Date(editing.createdAt).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <footer className="cey-modal__footer">
              <button className="cey-btn cey-btn--outline" onClick={() => setEditing(null)}>
                <i className="fa-solid fa-times" />
                Cancel
              </button>
              <button className="cey-btn cey-btn--gold" onClick={saveEditing}>
                <i className="fa-solid fa-check" />
                Save Changes
              </button>
            </footer>
          </div>
        </div>
      )}
    </section>
  );
};

export default CelebritiesGallery;