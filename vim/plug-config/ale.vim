" -----------------------------------------------------------
" LINTING:
" -----------------------------------------------------------

" In ~/.vim/vimrc, or somewhere similar.
let g:ale_fixers = {
\   '*': ['remove_trailing_lines', 'trim_whitespace'],
\   'javascript': ['eslint'],
\   'typescript': ['tslint', 'prettier']
\}

" Java LSP
"
" Java Language Server
" https://github.com/eclipse/eclipse.jdt.ls
"
" Java Language Server Client
" https://github.com/dense-analysis/ale/blob/master/doc/ale-java.txt

" Set this variable to 1 to fix files when you save them.
let g:ale_fix_on_save = 1

" -----------------------------------------------------------
" AUTO COMPLETION:
" -----------------------------------------------------------

" Enable completion where available.
" This setting must be set before ALE is loaded.
"
" You should not turn this setting on if you wish to use ALE as a completion
" source for other completion plugins, like Deoplete.
let g:ale_completion_enabled = 1

" ALE provides an omni-completion function you can use for triggering
" completion manually with <C-x><C-o>
set omnifunc=ale#completion#OmniFunc

" ALE supports automatic imports from external modules.
" This behavior is enabled by default and can be disabled by setting:
" let g:ale_completion_autoimport = 0

" ALE for displaying error information in the status bar.
let g:airline#extensions#ale#enabled = 1

" -----------------------------------------------------------
" GoTo DEFINITION:
" -----------------------------------------------------------
nnoremap <Leader>gd             :ALEGoToDefinition<Enter>
nnoremap <Leader>gt             :ALEGoToTypeDefinition<Enter>
nnoremap <Leader>gi             :ALEGoToImplementation<Enter>

" You can jump back to the position you were at before going to a reference of
" something with jump motions like CTRL-O.
nnoremap <Leader>gr             :ALEFindReferences -relative<Enter>

" -----------------------------------------------------------
" REFACTOR:
" -----------------------------------------------------------
nnoremap <Leader>rn             :ALERename<Enter>
nnoremap <Leader>rf             :ALEFileRename<Enter>
nnoremap <Leader>ri             :ALEOrganizeImports<Enter>
