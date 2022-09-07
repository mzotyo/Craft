" Development environment
nnoremap <Leader>nrt            :!npm run test %<Enter><Enter>
nnoremap <Leader>nrw            :!npm run test-watch<Enter><Enter>


" -----------------------------------------------------------
" Git command on current file:
" -----------------------------------------------------------
" function! Prettier()
"   silent exec ":!npx prettier --write %"
" endfun
"
" nnoremap <Leader>nrp            :call Prettier() <Enter><Enter>
nnoremap <Leader>nrp             :PrettierAsync<Enter>
