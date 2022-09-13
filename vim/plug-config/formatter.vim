
" -----------------------------------------------------------
" FORMATTERS:
" -----------------------------------------------------------
" autocmd FileType typescript setlocal formatprg=prettier\ --parser\ typescript

" -----------------------------------------------------------
" Typescript and JavaScript prittier
" -----------------------------------------------------------
function! Prettier(currentFile)
    execute "!eslint --fix " a:currentFile
endfun

nnoremap <Leader>p             :call Prettier("%")<Enter><Enter>
