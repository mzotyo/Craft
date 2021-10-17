" -----------------------------------------------------------
" PLUGINS:
" -----------------------------------------------------------

call plug#begin('~/.vim/bundle')
    Plug 'http://github.com/tpope/vim-surround'                                 " Surrounding ysw)
    Plug 'https://github.com/tpope/vim-repeat'                                  " Repeate vim-surrounding commands 
    Plug 'https://github.com/preservim/nerdtree', { 'on': 'NERDTreeToggle' }    " Open file browse
    Plug 'https://github.com/ap/vim-css-color'                                  " CSS Color Preview
    Plug 'https://github.com/vim-syntastic/syntastic'                           " sytnax checker / linter
call plug#end()

" -----------------------------------------------------------
" BASIC SETTINGS:
" -----------------------------------------------------------

set nocompatible                                                                " enter the current millenium

set encoding=utf-8
set guifont=Lucida\ Console:h11

set nowrap
set wildmode=longest,list                                                       " get bash-like tab completions

set number                                                                      " add line numbers
" set relativenumber

syntax enable                                                                   " enable syntax and plugins (for netrw)
filetype plugin on                                                              " reocgnizing the file type
filetype plugin indent on                                                       " allow auto-indenting depending on file type

set autoindent                                                                  " indent a new line the same amount as the line just typed
set tabstop=4 softtabstop=0 expandtab shiftwidth=4 smarttab                     " tabulator behaviour

set showmatch                                                                   " show matching 
set ignorecase                                                                  " case insensitive 

set hlsearch                                                                    " highlight search 
set incsearch                                                                   " incremental search

" -----------------------------------------------------------
" FINDING FILES:
" -----------------------------------------------------------

" Search down into subfolders
" Provides tab-completion for all file-related tasks
set path+=**

" Display all matching files when tab complete
set wildmenu

" NOW WE CAN:
" - Hit tab to :find by partial match
" - Use * to make it fuzzy

" THINGS TO CONSIDER:
" - :b lets you autocomlete any open buffer

" -----------------------------------------------------------
" FILE BROWSING:
" -----------------------------------------------------------

" Tweaks for browsing
let g:netrw_banner=0		                                                    " disable annoying banner
let g:netrw_brows_split=4	                                                    " open in prior window
let g:netrwaltv=1			                                                    " open splits to the right
let g:netrw_liststyle=3		                                                    " tree view
let g:netrw_list_hide=netrw_gitignore#Hide()
let g:netrw_list_hide.=',\(^|\s\s\)zs\.\S\+'

" NOW WE CAN:
" - :edit a folder to open a file browser
" - <CR>/v/t to open in an h-split/v-split/tab
" - check |netrw-browse-maps| for more mappings

" -----------------------------------------------------------
"  SNIPPETS:
" -----------------------------------------------------------

" Read an empty HTML template and more cursor to title
nnoremap ,html :-1read $HOME/.vim/snippets/.skeleton.html<CR>3jwf>a

" -----------------------------------------------------------
" KEY BINDING:
" -----------------------------------------------------------

" Toggles file browsing window on and off
nnoremap <C-e>      :NERDTreeToggle<CR>

" Create and navigate tabs
nnoremap <C-t>      :tabnew<CR>
nnoremap <C-Left>   :tabprevious<CR>                                                                            
nnoremap <C-Right>  :tabnext<CR>
nnoremap <C-h>      :tabprevious<CR>                                                                            
nnoremap <C-l>      :tabnext<CR>

" Save & exit
nnoremap <C-s>      <ESC>:w<CR>
nnoremap <C-c>      <ESC>:wq!<CR>
nnoremap <C-x>      <ESC>:q!<CR>

" -----------------------------------------------------------
" BACKUP:
" -----------------------------------------------------------

set noswapfile                                                                  " disable creating swap file
set dir=/tmp,/c/tmp,/c/temp
set backupdir=/tmp,/c/tmp,/c/temp
set udf
set udir=/tmp,/c/tmp,/c/temp

" -----------------------------------------------------------
" THINGS TO EXPLORE:
" -----------------------------------------------------------
" set cursorline
" set cc=130                                                                    " set an 130 column border for good coding style
" syn clear markdownError

