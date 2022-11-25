" ------------------------------------------------------------------------------
" GIT CONFIGURATIONS:
" ------------------------------------------------------------------------------
" Git status window
function! GitStatusWindow()
    execute "G"
    wincmd L
    setlocal winfixwidth
    vertical resize 50
endfun

nnoremap <C-g>                  :call GitStatusWindow()<Enter>

" Changes
nnoremap <Leader>gd             :vert Gdiffsplit<Enter>

" Log
nnoremap <C-l>                  :GV HEAD master<Enter>

" Push Pull
nnoremap <Leader>gu             :Git push --set-upstream <space>
nnoremap <Leader>gp             :Git push<Enter>
nnoremap <Leader>gf             :Git push -f<Enter>
nnoremap <Leader>gl             :Git pull<Enter>

" Blame
nnoremap <Leader>bl             :Git blame<Enter>

" Checkout
nnoremap <Leader>ch             :Git checkout<space>
nnoremap <Leader>br             :Git checkout -b<space>

" Reset
nnoremap <Leader>rs             :Git reset --hard<space>

" Cherry pick
nnoremap <Leader>cp             :Git cherry-pick<space>

" Stash
nnoremap <Leader>st             :Git stash -u<Enter>
nnoremap <Leader>sp             :Git stash pop<Enter>
nnoremap <Leader>sa             :Git stash apply<Enter>
nnoremap <Leader>sw             :Git stash show -p<Enter>
