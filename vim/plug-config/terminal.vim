" ------------------------------------------------------------------------------
" TERMINAL CONFIGRATIONS:
" ------------------------------------------------------------------------------
function! TerminalWindow()
    term
    wincmd J
    setlocal winfixheight
    resize 10
endfun

nnoremap <leader>t              :call TerminalWindow()<Enter>
