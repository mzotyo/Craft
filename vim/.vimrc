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
    Plug 'https://github.com/HerringtonDarkholme/yats.vim'                      " Basic typescript support
    Plug 'https://github.com/MaxMEllon/vim-jsx-pretty'                          " JSX support
    Plug 'https://github.com/neoclide/coc.nvim'                                 " LSP client
    Plug 'http://github.com/honza/vim-snippets'                                 " Snippets
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

" set cursorline 
" set cc=130                                                                    " set an 130 column border for good coding style 

" -----------------------------------------------------------
" KEY BINDINGS:
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
nnoremap <C-c>          :q!<Enter>

inoremap <C-s>          <ESC>:w<Enter>
inoremap <C-c>          <ESC>:q!<Enter>

" Distraction free
nnoremap <C-y>          :Goyo<Enter>
inoremap <C-y>          <ESC>:Goyo<Enter>

" Git commands
nnoremap <leader>gs     :Git status<Enter>
nnoremap <leader>gd     :Git diff<Enter>
nnoremap <leader>ga     :Git add --all<Enter>
nnoremap <leader>gA     :Git add --interactive<Enter>
nnoremap <leader>gc     :Git commit<Enter>
nnoremap <leader>gC     :Git commit --amend<Enter>
nnoremap <leader>gp     :Git push<Enter>
nnoremap <leader>gP     :Git push -f<Enter>
nnoremap <leader>gu     :Git pull<Enter>
nnoremap <leader>gl     :Git log --decorate --all<Enter>
nnoremap <leader>gL     :Git log --decorate --all --stat<Enter>

" Development environment
nnoremap <leader>nt     :!npm run test<Enter>
nnoremap <leader>nT     :!npm run test %<Enter>
nnoremap <leader>p      :!npx prettier --write %<Enter><Enter>

" No highlight
nnoremap <leader>h      :noh<Enter>

" -----------------------------------------------------------
" BACKUP:
" -----------------------------------------------------------

set noswapfile                                                                  " disable creating swap file
set dir=/tmp,/c/tmp,/c/temp
set backupdir=/tmp,/c/tmp,/c/temp
set udf
set udir=/tmp,/c/tmp,/c/temp 

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
" OPTIONAL SETTINGS:
" -----------------------------------------------------------
runtime findfiles.vim
runtime filebrowsing.vim
runtime snippets.vim
runtime lsp.vim

