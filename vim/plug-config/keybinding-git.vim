" Git commands
nnoremap <C-g>s        :Git status<Enter>
nnoremap <C-g>d         :Git diff<Enter>
nnoremap <C-g>a         :Git add --all<Enter>
nnoremap <C-g>A         :Git add --interactive<Enter>
nnoremap <C-g>c         :Git commit<Enter>
nnoremap <C-g>C         :Git commit --amend<Enter>
nnoremap <C-g>p         :Git push<Enter>
nnoremap <C-g>P         :Git push -f<Enter>
nnoremap <C-g>u         :Git pull<Enter>
nnoremap <C-g>l         :Git log --decorate --all<Enter>
nnoremap <C-g>L         :Git log --decorate --all --stat<Enter>
nnoremap <C-g>b         :Git blame<Enter>

" -----------------------------------------------------------
" Git command on current file:
" -----------------------------------------------------------
fun! GitCommand(command)
  silent! !clear
  exec "!git " . a:command . " %"
endfun

" -- git diff for current file
"map <C-g>d :call GitCommand("diff") <Enter>

" -- git log for current file
"map <C-g>l :call GitCommand("log -p") <Enter>

" -- git blame for current file
map <C-g>b              :call GitCommand("blame") <Enter>


" -----------------------------------------------------------
" Git command on current file:
" -----------------------------------------------------------
function! GitGrep(word)
    execute "! git grep -i -n -p --break --heading " . a:word
endfunction

" -- git grep current word
map <C-r>               :call GitGrep("<cword>")<Enter><Enter>
