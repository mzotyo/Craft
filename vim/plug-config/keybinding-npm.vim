" Development environment
nnoremap <Leader>nt             :!npm run test %<Enter><Enter>
nnoremap <Leader>ntw            :!npm run test-watch<Enter><Enter>


" -----------------------------------------------------------
" Prittier on current file
" -----------------------------------------------------------
" function! Prettier()
"   silent exec ":!npx prettier --write %"
" endfun


function! Prettier(currentFile)
    term  "!eslint --fix " a:currentFile
endfun

nnoremap <Leader>lt             :call Prettier("%")<Enter><Enter>
" nnoremap <Leader>pt             :PrettierAsync<Enter>
