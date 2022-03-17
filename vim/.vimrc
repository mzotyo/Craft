" -----------------------------------------------------------
" PLUGINS:
" -----------------------------------------------------------

call plug#begin('~/.vim/bundle')
    Plug 'http://github.com/tpope/vim-surround'                                 " Surrounding ysw)
    Plug 'https://github.com/tpope/vim-repeat'                                  " Repeate vim-surrounding commands 
    Plug 'https://github.com/preservim/nerdtree', { 'on': 'NERDTreeToggle' }    " Open file browse
    Plug 'https://github.com/junegunn/goyo.vim'                                 " Distraction free vim
    Plug 'https://github.com/tpope/vim-fugitive'                                " Git tool
    Plug 'https://github.com/prettier/vim-prettier', {
        \ 'do': 'yarn install --frozen-lockfile --production',
        \ 'for': ['javascript', 'typescript', 'css', 'less', 'scss', 'json', 'graphql', 'markdown', 'vue', 'svelte', 'yaml', 'html'] }
call plug#end()

" -----------------------------------------------------------
" BASIC SETTINGS:
" -----------------------------------------------------------

set nocompatible                                                                " enter the current millenium
set autochdir                                                                   " changes active directory to the directory of the currently opened file

set encoding=utf-8
set guifont=Lucida\ Console:h11

set nowrap                                                                      " no line wrapping
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
" KEY BINDING:
" -----------------------------------------------------------

" Leader key
let mapleader = ","

" Toggles file browsing window on and off 
nnoremap <C-e>          :NERDTreeToggle<Enter>

" Open init.vim
nnoremap <C-i>          :e ~/.config/nvim/init.vim<Enter>

" Create and navigate tabs
nnoremap <C-t>          :tabnew<Enter>
nnoremap <C-Left>       :tabprevious<Enter>                                                                            
nnoremap <C-Right>      :tabnext<Enter>
nnoremap <C-h>          :tabprevious<Enter>                                                                            
nnoremap <C-l>          :tabnext<Enter>

" Save & exit
nnoremap <C-s>          :w<Enter> 
nnoremap <C-c>          :wq!<Enter>
nnoremap <C-x>          :q!<Enter>

inoremap <C-s>          <ESC>:w<Enter>
inoremap <C-c>          <ESC>:wq!<Enter>
inoremap <C-x>          <ESC>:q!<Enter>

" Distraction free
nnoremap <C-y>          :Goyo<Enter>
inoremap <C-y>          <ESC>:Goyo<Enter>

" No highlight
nnoremap <leader>h      :noh<Enter>

" Terminal
nnoremap <leader>t      :terminal<Enter><C-w><S-j><C-w>20-

" -----------------------------------------------------------
" BACKUP:
" -----------------------------------------------------------

set noswapfile                                                                  " disable creating swap file
set dir=/tmp,/c/tmp,/c/temp
set backupdir=/tmp,/c/tmp,/c/temp
set udf
set udir=/tmp,/c/tmp,/c/temp 

" ----------------------------------------------------------- 
" SETTINGS: 
" ----------------------------------------------------------- 

source plug-config/findfiles.vim
source plug-config/filebrowsing.vim
source plug-config/formatter.vim
source plug-config/autocomplete.vim
source plug-config/keybinding-git.vim
source plug-config/keybinding-npm.vim
