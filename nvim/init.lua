-- Vim Tab Settings --
vim.cmd('set expandtab')
vim.cmd('set tabstop=4')
vim.cmd('set softtabstop=4')
vim.cmd('set shiftwidth=4')
vim.cmd('set relativenumber')

-- Lazy Nvim Load Script --
local lazypath = vim.fn.stdpath('data') .. '/lazy/lazy.nvim'
if not vim.loop.fs_stat(lazypath) then
    vim.fn.system({
        'git',
        'clone',
        '--filter=blob:none',
        'https://github.com/folke/lazy.nvim.git',
        '--branch=stable', --latest stable release
        lazypath,
    })
end
vim.opt.rtp:prepend(lazypath)


local plugins = {
    {
        'EdenEast/nightfox.nvim', 
        name = 'nigthfox', 
        priority=1000,
    },
    {
        'nvim-telescope/telescope.nvim',
        tag = '0.1.5',
        dependencies = {
            'nvim-lua/plenary.nvim'
        },
    },
    {
        'nvim-treesitter/nvim-treesitter', 
        build = ':TSUpdate',
    },
    {
        'nvim-neo-tree/neo-tree.nvim',
        branch = 'v3.x',
        dependencies = {
            'nvim-lua/plenary.nvim',
            'nvim-tree/nvim-web-devicons',
            'MunifTanjim/nui.nvim',
        },
    },
}
local opts = {}

require('lazy').setup(plugins, opts)
local builtin = require('telescope.builtin')
vim.keymap.set('n', '<A-Enter>', builtin.find_files, {})

local config = require('nvim-treesitter.configs')
config.setup({
    ensure_installed = {'lua', 'javascript', 'c_sharp', 'python', 'cpp', 'c', 'json', 'xml', 'html', 'css'},
    highlight = { enable = true },
    indent = { enable = true },
})

local palettes = require('nightfox.palette').load('carbonfox')
local specs = require('nightfox.spec').load('carbonfox')

require('nightfox').setup({ palettes = palettes, specs = specs })
vim.cmd('colorscheme carbonfox')


-- local plugins = require('lazy.plugins')
-- local telescope = require('plugins.telescope')
-- local nightfox = require('plugins.nightfox')
-- local treesitter = require('plugins.treesitter')
-- 
-- plugins.setup({
--     telescope = telescope.config,
--     nightfox = nightfox.config,
--     treesitter = treesitter.config,
-- })

-- vim.keymap.set(';', 'l')
-- vim.keymap.set('l', 'k')
-- vim.keymap.set('k', 'j')
-- vim.keymap.set('j', 'h')

-- local function map(mode, lhs, rhs, opts)
--     local options = (noremap = true, silent = true)
--     if opts then
--         if opts.desc then
--             opts.desc = 'keymaps.lua: ' .. opts.desc
--         end
--         options = vim.tbl_extend('force', options, opts)
--     end
--     vim.keymap.set(mode, lhs, rhs, options)
-- end
-- 
-- map('n', ';', 'l', { desc = 'Move navigation keys to the right'})
-- map('n', 'l', 'k', { desc = 'Move navigation keys to the right'})
-- map('n', 'k', 'j', { desc = 'Move navigation keys to the right'})
-- map('n', 'j', 'h', { desc = 'Move navigation keys to the right'})
