" ------------------------------------------------------------------------------
" GIT CONFIGURATIONS:
" ------------------------------------------------------------------------------
" Git status window
nnoremap <leader>g              :G<Enter><C-w><S-l><C-w>40<:Gclog<Enter><C-o>
" nnoremap <leader>g            :G<Enter><C-w><S-l><C-w>40<:Git log --decorate HEAD<Enter>

" Changes
nnoremap <Leader>diff           :vert Gdiffsplit<Enter>

" Log
nnoremap <Leader>log            :Git log --decorate --graph HEAD master<Enter>

" Push Pull
nnoremap <Leader>pushu          :Git push --set-upstream <space>
nnoremap <Leader>push           :Git push<Enter>
nnoremap <Leader>pushf          :Git push -f<Enter>
nnoremap <Leader>pull           :Git pull<Enter>

" Blame
nnoremap <Leader>blame          :Git blame<Enter>

" Checkout
nnoremap <Leader>checkout       :Git checkout<space>
nnoremap <Leader>branch         :Git checkout -b<space>

" Checkout
nnoremap <Leader>reset          :Git reset --hard<space>

" Stash
nnoremap <Leader>stash          :Git stash -u<Enter>
nnoremap <Leader>stashp         :Git stash pop<Enter>
nnoremap <Leader>stasha         :Git stash apply<Enter>
nnoremap <Leader>stashw         :Git stash show -p<Enter>
