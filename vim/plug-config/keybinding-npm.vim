" Development environment
nnoremap <Leader>nt             :!npm run test %<Enter><Enter>
nnoremap <Leader>nT             :!npm run test-watch<Enter><Enter>


" -----------------------------------------------------------
" Git command on current file:
" -----------------------------------------------------------
function! Prettier()
  silent exec ":!npx prettier --write %"
endfun

nnoremap <Leader>np             :call Prettier() <Enter><Enter>
