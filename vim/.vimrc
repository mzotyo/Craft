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
nnoremap <leader>html   :-1read $HOME/.vim/snippets/.skeleton.html<Enter>3jwf>a

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
inoremap <C-w><C-c>     <ESC>:wq!<Enter>
inoremap <C-w><C-x>     <ESC>:q!<Enter>

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

" Terminal
nnoremap <leader>t             :terminal<Enter><C-w><S-j><C-w>20-

" -----------------------------------------------------------
" BACKUP:
" -----------------------------------------------------------

set noswapfile                                                                  " disable creating swap file
set dir=/tmp,/c/tmp,/c/temp
set backupdir=/tmp,/c/tmp,/c/temp
set udf
set udir=/tmp,/c/tmp,/c/temp 

" ----------------------------------------------------------- 
" FORMATTERS:
" ----------------------------------------------------------- 
autocmd FileType typescript setlocal formatprg=prettier\ --parser\ typescript

" ----------------------------------------------------------- 
" LSP CONFIGURATIONS:
" ----------------------------------------------------------- 

" TextEdit might fail if hidden is not set.
set hidden

" Give more space for displaying messages.
set cmdheight=2

" Having longer updatetime (default is 4000 ms = 4 s) leads to noticeable
" delays and poor user experience.
set updatetime=300

" Don't pass messages to |ins-completion-menu|.
set shortmess+=c

" Always show the signcolumn, otherwise it would shift the text each time
" diagnostics appear/become resolved.
if has("nvim-0.5.0") || has("patch-8.1.1564")
  " Recently vim can merge signcolumn and number column into one
  set signcolumn=number
else
  set signcolumn=yes
endif

" Use tab for trigger completion with characters ahead and navigate.
" NOTE: Use command ':verbose imap <tab>' to make sure tab is not mapped by
" other plugin before putting this into your config.
inoremap <silent><expr> <TAB>
      \ pumvisible() ? "\<C-n>" :
      \ <SID>check_back_space() ? "\<TAB>" :
      \ coc#refresh()
inoremap <expr><S-TAB> pumvisible() ? "\<C-p>" : "\<C-h>"

function! s:check_back_space() abort
  let col = col('.') - 1
  return !col || getline('.')[col - 1]  =~# '\s'
endfunction

" Use <c-space> to trigger completion.
if has('nvim')
  inoremap <silent><expr> <c-space> coc#refresh()
else
  inoremap <silent><expr> <c-@> coc#refresh()
endif

" Make <Enter> auto-select the first completion item and notify coc.nvim to
" format on enter, <Enter> could be remapped by other vim plugin
inoremap <silent><expr> <Enter> pumvisible() ? coc#_select_confirm()
                              \: "\<C-g>u\<Enter>\<c-r>=coc#on_enter()\<Enter>"

" ----------------------------------------------------------- 
" THINGS TO EXPLORE: 
" ----------------------------------------------------------- 
" set cursorline 
" set cc=130                                                                    " set an 130 column border for good coding style 
" syn clear markdownError
