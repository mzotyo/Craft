" Development environment
nnoremap <C-n>t             :!npm run test %<Enter><Enter>
nnoremap <C-n>T             :!npm run test-watch<Enter><Enter>


" -----------------------------------------------------------
" Git command on current file:
" -----------------------------------------------------------

function! Prettier()
  silent exec ":!npx prettier --write %"
endfun

nnoremap <C-p>              :call Prettier() <Enter><Enter>
