
" -----------------------------------------------------------
" FORMATTERS:
" -----------------------------------------------------------
" autocmd FileType typescript setlocal formatprg=prettier\ --parser\ typescript

" -----------------------------------------------------------
" Typescript and JavaScript prittier
" -----------------------------------------------------------
" nnoremap <Leader>pt             :PrettierAsync<Enter>

function! Prettier(currentFile)
   silent ! start "!eslint --fix " a:currentFile
endfun

nnoremap <Leader>lt             :call Prettier("%")<Enter><Enter>
