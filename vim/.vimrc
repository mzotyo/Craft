" -----------------------------------------------------------
" PLUGINS:
" -----------------------------------------------------------

call plug#begin('~/.vim/bundle')
    Plug 'http://github.com/tpope/vim-surround'                                 " Surrounding ysw)
    Plug 'https://github.com/tpope/vim-repeat'                                  " Repeate vim-surrounding commands 
    Plug 'https://github.com/preservim/nerdtree', { 'on': 'NERDTreeToggle' }    " Open file browse
    Plug 'https://github.com/ap/vim-css-color'                                  " CSS Color Preview
    Plug 'https://github.com/vim-syntastic/syntastic'                           " sytnax checker / linter
    Plug 'https://github.com/junegunn/goyo.vim'                                 " Distraction free vim
    Plug 'https://github.com/tpope/vim-fugitive'                                " git tool
call plug#end()

" -----------------------------------------------------------
" BASIC SETTINGS:
" -----------------------------------------------------------

set nocompatible                                                                " enter the current millenium
set autochdir

set encoding=utf-8
set guifont=Lucida\ Console:h11

set nowrap
set number relativenumber                                                       " add line numbers

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
set wildmode=longest,list                                                       " get bash-like tab completions

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
"  TAG JUMPING:
" -----------------------------------------------------------

" Create the `tags` file (may need to install cttags first)
command! MakeTags !ctags -R .

" NOW WE CAN:
" - Use ^] to jump to tag under cursor
" - Use g^] for ambiguous tags
" - Use ^t to jump back up the tag stack

" THINGS TO CONSIDER:
" - This doesn't help if you want a visual list of tags

" -----------------------------------------------------------
"  AUTOCOMPLETE:
" -----------------------------------------------------------

" The good stuff is documented in |ins-completion|

" HIGHLIGHTS:
" - ^x^n for JUST this file
" - ^x^f for filenames (works with out path trick!)
" - ˘x^] for tags only
" - ^n for anything specified by the 'complete option

" NOW WE CAN:
" - Use ^n and ^p to go back and forth in the suggestion list

" -----------------------------------------------------------
"  SNIPPETS:
" -----------------------------------------------------------

" Read an empty HTML template and more cursor to title
nnoremap ,html :-1read $HOME/.vim/snippets/.skeleton.html<CR>3jwf>a

" -----------------------------------------------------------
" KEY BINDING:
" -----------------------------------------------------------

" Toggles file browsing window on and off 
nnoremap <C-e>          :NERDTreeToggle<CR>

" Open init.vim
nnoremap <C-i>          :e C:\Users\magyariz\_vimrc<CR>

" Create and navigate tabs
nnoremap <C-t>          :tabnew<CR>
nnoremap <C-Left>       :tabprevious<CR>                                                                            
nnoremap <C-Right>      :tabnext<CR>
nnoremap <C-h>          :tabprevious<CR>                                                                            
nnoremap <C-l>          :tabnext<CR>

" Save & exit
nnoremap <C-s>          :w<CR>
nnoremap <C-c>          :wq!<CR>
nnoremap <C-x>          :q!<CR>

inoremap <C-s>          <ESC>:w<CR>
inoremap <C-w><C-c>     <ESC>:wq!<CR>
inoremap <C-w><C-x>     <ESC>:q!<CR>

" Distraction free
nnoremap <C-y>          :Goyo<CR>
inoremap <C-y>          <ESC>:Goyo<CR>

" Git commands
nnoremap <C-g><C-s>     :Git status<CR>
nnoremap <C-g><C-d>     :Git diff<CR>
nnoremap <C-g><C-a>     :Git add --all<CR>
nnoremap <C-g><C-i>     :Git add --interactive<CR>
nnoremap <C-g><C-c>     :Git commit<CR>
nnoremap <C-g><C-p>     :Git push<CR>
nnoremap <C-g><C-u>     :Git pull<CR>
nnoremap <C-g><C-l>     :Git log --decorate --all<CR>

" Development environment
nnoremap <C-d><C-t>     :!npm run test % 

" -----------------------------------------------------------
" BACKUP:
" -----------------------------------------------------------

set noswapfile                                                                  " disable creating swap file
set dir=/tmp,/c/tmp,/c/temp
set backupdir=/tmp,/c/tmp,/c/temp
set udf
set udir=/tmp,/c/tmp,/c/temp " ----------------------------------------------------------- " THINGS TO EXPLORE: " ----------------------------------------------------------- " set cursorline " set cc=130                                                                    " set an 130 column border for good coding style " syn clear markdownError
