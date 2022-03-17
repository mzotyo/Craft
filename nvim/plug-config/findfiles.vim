" -----------------------------------------------------------
" FINDING FILES:
" -----------------------------------------------------------

" Search down into subfolders
" Provides tab-completion for all file-related tasks
set path+=**

" Display all matching files when tab complete
set wildmenu
set wildmode=longest,list                                                       " get bash-like tab completions

" NOW WE CAN:
" - Hit tab to :find by partial match
" - Use * to make it fuzzy

" THINGS TO CONSIDER:
" - :b lets you autocomlete any open buffer


