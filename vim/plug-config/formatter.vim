
" -----------------------------------------------------------
" FORMATTERS:
" -----------------------------------------------------------
" autocmd FileType typescript setlocal formatprg=prettier\ --parser\ typescript
" autocmd FileType typescript call "!eslint --fix %"


" -----------------------------------------------------------
" Typescript and JavaScript prittier
" -----------------------------------------------------------
function! Prettier(currentFile)
    write
    silent execute "!eslint --fix " a:currentFile
endfun

nnoremap <Leader>p             :call Prettier("%")<Enter><Enter>
