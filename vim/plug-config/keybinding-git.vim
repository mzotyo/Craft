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
nnoremap <Leader>gb     :<C-u>call gitblame#echo()<CR>
