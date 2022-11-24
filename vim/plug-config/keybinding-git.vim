" ------------------------------------------------------------------------------
" GIT CONFIGURATIONS:
" ------------------------------------------------------------------------------
" Git status window
nnoremap <leader>g              :GV<Enter>:G<Enter><C-w><S-j><C-w>k

" Changes
nnoremap <Leader>gd             :vert Gdiffsplit<Enter>

" Log
nnoremap <Leader>gl             :Git log --decorate --graph HEAD master<Enter>

" Push Pull
nnoremap <Leader>gpu            :Git push --set-upstream <space>
nnoremap <Leader>gp             :Git push<Enter>
nnoremap <Leader>gpf            :Git push -f<Enter>
nnoremap <Leader>gpl            :Git pull<Enter>

" Blame
nnoremap <Leader>bl             :Git blame<Enter>

" Checkout
nnoremap <Leader>ch             :Git checkout<space>
nnoremap <Leader>br             :Git checkout -b<space>

" Checkout
nnoremap <Leader>rs             :Git reset --hard<space>

" Stash
nnoremap <Leader>st             :Git stash -u<Enter>
nnoremap <Leader>sp             :Git stash pop<Enter>
nnoremap <Leader>sa             :Git stash apply<Enter>
nnoremap <Leader>sw             :Git stash show -p<Enter>
