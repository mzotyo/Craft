" ------------------------------------------------------------------------------
" GIT CONFIGURATIONS:
" ------------------------------------------------------------------------------

" Changes
nnoremap <Leader>gs             :Git status<Enter>
nnoremap <Leader>gd             :Git diff<Enter>

" Log
nnoremap <Leader>gl             :Git log --decorate HEAD master<Enter>
nnoremap <Leader>glg            :Git log --decorate --graph HEAD master<Enter>
nnoremap <Leader>gla            :Git log --decorate --all HEAD master<Enter>
nnoremap <Leader>gls            :Git log --decorate --stat HEAD master<Enter>

" Commit
nnoremap <Leader>ga             :Git add --all<Enter>
nnoremap <Leader>gai            :Git add --interactive<Enter>
nnoremap <Leader>gcm            :Git commit<Enter>
nnoremap <Leader>gca            :Git commit --amend<Enter>
nnoremap <Leader>grs            :Git restore %<Enter>
nnoremap <Leader>gus            :Git restore --staged %<Enter>

" Push Pull
nnoremap <Leader>gpc            :Git push --set-upstream <space>
nnoremap <Leader>gps            :Git push<Enter>
nnoremap <Leader>gpf            :Git push -f<Enter>
nnoremap <Leader>gpl            :Git pull<Enter>

" Blame
nnoremap <Leader>gbl            :Git blame<Enter>

" Checkout
nnoremap <Leader>gch            :Git checkout<space>
nnoremap <Leader>gcb            :Git checkout -b<space>

" Checkout
nnoremap <Leader>grh            :Git reset --hard<space>

" Stash
nnoremap <Leader>gsh            :Git stash -u<Enter>
nnoremap <Leader>gsp            :Git stash pop<Enter>
nnoremap <Leader>gsa            :Git stash apply<Enter>
nnoremap <Leader>gsw            :Git stash show -p<Enter>

" Stash save
nnoremap <Leader>gsS            :Git stash save<space>
nnoremap <Leader>gsP            :Git stash pop<space>
nnoremap <Leader>gsL            :Git stash list<Enter>
nnoremap <Leader>gsD            :Git stash drop<space>
nnoremap <Leader>gsc            :Git stash clear<Enter>
