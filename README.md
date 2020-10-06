    <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Seu e-mail" /> 
           

                <input value={tel} onChange={e => setTel(e.target.value)} placeholder="Telefone" />
                <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Sua senha" />

                <input value={cpfcnpj} onChange={e => setCpfcnpj(e.target.value)} placeholder="CPF ou CNPJ" />
                <input value={uf} onChange={e => setUf(e.target.value)} placeholder="UF" />

                <input value={endereco} onChange={e => setEndereco(e.target.value)} placeholder="Seu endereço" />
