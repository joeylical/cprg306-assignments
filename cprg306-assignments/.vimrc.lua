local capabilities = require('cmp_nvim_lsp').default_capabilities()

require('lspconfig')['ts_ls'].setup {
  capabilities = capabilities
}

require('lspconfig')['html'].setup {
  capabilities = capabilities
}

require('lspconfig')['cssls'].setup {
  capabilities = capabilities
}

local whichKey = require('which-key')
whichKey.add({
    {"<leader>n", group="cprg306"},
    {"<leader>nf", ":silent !firefox --new-window http://localhost:3000<cr>", desc="open firefox"},
    {"<leader>ns", ":TermExec cmd='npm run dev' direction='horizontal'<cr>", desc="start dev"},
    {"<leader>nt", ":pkill -SIGINT npm<cr>", desc="stop dev"},
})
