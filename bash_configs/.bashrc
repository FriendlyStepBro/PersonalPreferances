# If not running interactively, don't do anything
# [[ $- != *i* ]] && return

[[ -f ~/.bash_init ]] && source ~/.bash_init

[[ -f ~/.bash_alias ]] && source ~/.bash_alias

PS1='[\u@\h \W]\$ '

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
