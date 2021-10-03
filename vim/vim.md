# Vim

## Startup settings

**.vimrc:**
```bash
set encoding=utf-8
colorscheme carbonized-dark
set nowrap
set guifont=Lucida\ Console:h11
set relativenumber
set tabstop=4 softtabstop=0 noexpandtab shiftwidth=4 smarttab
```

## Color schemes

```bash
git clone https://github.com/rafi/awesome-vim-colorschemes
```

# Plugins

## Windows

Execute in **PowerShell:**

```shell
iwr -useb https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim |`
    ni $HOME/vimfiles/autoload/plug.vim -Force
```

Copy at the beginnig of the file `~/_vimrc`

```js
" -----------------------------------------------------------
" PLUGINS: 

call plug#begin('~/.vim/bundle')
 
Plug 'http://github.com/tpope/vim-surround' " Surrounding ysw)
Plug 'https://github.com/preservim/nerdtree', { 'on': 'NERDTreeToggle' }
Plug 'https://github.com/ap/vim-css-color' " CSS Color Preview
 
call plug#end()
```

Restart vim

Execute inside vim:

```js
:PlugInstall
```
## Linux

Download [plug.vim](https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim) into `~/.vim/autoload` folder.

Copy at the beginnig of the file `~/.vimrc`

```js
" -----------------------------------------------------------
" PLUGINS: 

call plug#begin('~/.vim/bundle')
 
Plug 'http://github.com/tpope/vim-surround' " Surrounding ysw)
Plug 'https://github.com/preservim/nerdtree', { 'on': 'NERDTreeToggle' }
Plug 'https://github.com/ap/vim-css-color' " CSS Color Preview
 
call plug#end()
```

Restart vim

Execute inside vim:

```js
:PlugInstall
```

## Plugins

| Plugin | Source |
|-|-|
|vim-plug|https://github.com/junegunn/vim-plug|
|fugitive|https://github.com/tpope/vim-fugitive|
|vim-surround|https://github.com/tpope/vim-surround| 

