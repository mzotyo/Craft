" Git commands
nnoremap <Leader>gs             :Git status<Enter>
nnoremap <Leader>gd             :Git diff<Enter>
nnoremap <Leader>ga             :Git add --all<Enter>
nnoremap <Leader>gai            :Git add --interactive<Enter>
nnoremap <Leader>gc             :Git commit<Enter>
nnoremap <Leader>gca            :Git commit --amend<Enter>
nnoremap <Leader>gp             :Git push<Enter>
nnoremap <Leader>gpf            :Git push -f<Enter>
nnoremap <Leader>gpl            :Git pull<Enter>
nnoremap <Leader>gl             :Git log --decorate HEAD master<Enter>
nnoremap <Leader>glg            :Git log --decorate --graph HEAD master<Enter>
nnoremap <Leader>gla            :Git log --decorate --all HEAD master<Enter>
nnoremap <Leader>gls            :Git log --decorate --stat HEAD master<Enter>
nnoremap <Leader>gbl            :Git blame<Enter>
nnoremap <Leader>gb             :Git checkout -b<space>

" -----------------------------------------------------------
" Git command on current file:
" -----------------------------------------------------------
function! GitGrep(word)
    execute "! git grep -i -n -p --break --heading " . a:word
endfunction

" -- git grep current word
map <Leader>ggr                 :call GitGrep("<cword>")<Enter><Enter>
