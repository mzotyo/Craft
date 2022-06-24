" Git commands
nnoremap <Leader>gs             :Git status<Enter>
nnoremap <Leader>gd             :Git diff<Enter>
nnoremap <Leader>ga             :Git add --all<Enter>
nnoremap <Leader>gA             :Git add --interactive<Enter>
nnoremap <Leader>gc             :Git commit<Enter>
nnoremap <Leader>gC             :Git commit --amend<Enter>
nnoremap <Leader>gp             :Git push<Enter>
nnoremap <Leader>gP             :Git push -f<Enter>
nnoremap <Leader>gu             :Git pull<Enter>
nnoremap <Leader>gl             :Git log --decorate --all<Enter>
nnoremap <Leader>gL             :Git log --decorate --all --stat<Enter>
nnoremap <Leader>gb             :Git blame<Enter>

" -----------------------------------------------------------
" Git command on current file:
" -----------------------------------------------------------
" fun! GitCommand(command)
"  silent! !clear
"  exec "!git " . a:command . " %"
" endfun

" -- git diff for current file
" map <C-g>d :call GitCommand("diff") <Enter>

" -- git log for current file
" map <C-g>l :call GitCommand("log -p") <Enter>

" -- git blame for current file
" map <Leader>gb                  :call GitCommand("blame") <Enter>


" -----------------------------------------------------------
" Git command on current file:
" -----------------------------------------------------------
function! GitGrep(word)
    execute "! git grep -i -n -p --break --heading " . a:word
endfunction

" -- git grep current word
map <Leader>gr                  :call GitGrep("<cword>")<Enter><Enter>
