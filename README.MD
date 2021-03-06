# Sobre o repositório

Aplicação em Nest.js realizando requisição no Keycloak para autenticação de login.
Este repositório contém o código fonte para subir uma aplicação do Keycloak com o docker.


## Rodando local

O Nest.js depende do Keycloak, por isso é necessário subir o Keycloak e depois executar o nest.

```bash
$ docker-compose up
$ npm run start:dev
```

Acesse no browser [http://localhost:8080](http://localhost:8080)


## Token JWT - Opcional

Foi desenvolvido a geração do token JWT sem o Keycload, por propósitos educacionais e não será utilizado no projeto.

# Gerando o token

Executar o comando:

```bash
$ node_modules/.bin/ts-node jwt.ts
```

### Rotas do Keycloak

Rota que recebe a solicitação de login e valida os dados enviados no body da requisição

```bash
POST: http://localhost:8080/auth/realms/keycloak-nest/protocol/openid-connect/token
Content-Type: application/x-www-form-urlencoded
```

Body:

```bash
client_id=app-nest
client_secret=a41e671c-6bf4-4039-b3fc-0b91cfebb5d8
grant_type=password
username=gisele.trizotte1@gmail.com 
password=123456
```

* __client_id__ é o nome do client cadastrado no painel do keycloak
* __client_secret__ é a secret gerada ao criar um client
* __grant_type__ nome do fluxo, neste caso de authorização/authenticação
* __username / password__ usuário e senha para poder gerar um token e permitir o usuário consumir as informações

Retorno
Ele gera o access_token ou seja concessão de acesso ou autorização de acesso e só o OUATH2 tem esse token.

```bash
 "access_token": "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJ2Sk04eFVNTFJCSkdENmJOUUpuYVdSWDk4bTFXVHJiY2VybTJQelhvd3dVIn0.eyJleHAiOjE2NDU0Mzk4MDYsImlhdCI6MTY0NTQwMzgwNiwianRpIjoiYzk0YjM3NmQtYzFlZC00OTRkLTkyZTQtOGEwNWM1NDNlMTQxIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2F1dGgvcmVhbG1zL2tleWNsb2FrLW5lc3QiLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiYjcwMTIyN2MtZmUwOC00MmFhLTkyNjctMTNiMDcwZWEyMWIyIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiYXBwLW5lc3QiLCJzZXNzaW9uX3N0YXRlIjoiOWIzN2M3YmUtMTcyYi00MTIyLTllODMtNGYwZWZmYWIyMzhhIiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwOi8vbG9jYWxob3N0OjMwMDAiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iLCJkZWZhdWx0LXJvbGVzLWtleWNsb2FrLW5lc3QiXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6ImVtYWlsIHByb2ZpbGUiLCJzaWQiOiI5YjM3YzdiZS0xNzJiLTQxMjItOWU4My00ZjBlZmZhYjIzOGEiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibmFtZSI6Ikdpc2VsZSBUcml6b3R0ZSIsInN1YmRvbWFpbiI6InRlbmFudDEiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJnaXNlbGUudHJpem90dGUxQGdtYWlsLmNvbSIsImdpdmVuX25hbWUiOiJHaXNlbGUiLCJmYW1pbHlfbmFtZSI6IlRyaXpvdHRlIiwiZW1haWwiOiJnaXNlbGUudHJpem90dGUxQGdtYWlsLmNvbSJ9.QICt_yyYmH1rU9iysI93c44lRH5ajoYpIKlq8kzgUBWnX8sPNTCJSwK7YcNePWU41Uas7IhIpcS5j23i3YsEBCB6Eq0AAvIMcDF5L1w3uGZZYtCGrqKQJsg84LlHo6YrXdb1nkPqgtC-ePimv5nBvQ9WLgAbFYG_-Z4YhmRrX4GQ-HjQ-XqxzTyXlyg0Xb5XhU6mHguoiDOHVlOs8tvZYesYM2RGLlISZmDIpetUuvN8sjt9lH6CUREvl74mJViN99GtUYtE9268Q2K7CIijr8EhVMbjQu3DYNH4ES04wTrbxOjmbYRHszrG-zfB_99WCVA7j7kGUnMOEkotgcUwlA",
    "expires_in": 36000,
    "refresh_expires_in": 1800,
    "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIyY2I5YTQwYi1hOGI1LTRlNjQtYWE2MS0yN2QwMzRkYjU2NDgifQ.eyJleHAiOjE2NDU0MDU2MDYsImlhdCI6MTY0NTQwMzgwNiwianRpIjoiNWUzYjg0NmMtMDJjZC00NWUxLThmMDMtNzBmMGIxYjRjYzQzIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2F1dGgvcmVhbG1zL2tleWNsb2FrLW5lc3QiLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvYXV0aC9yZWFsbXMva2V5Y2xvYWstbmVzdCIsInN1YiI6ImI3MDEyMjdjLWZlMDgtNDJhYS05MjY3LTEzYjA3MGVhMjFiMiIsInR5cCI6IlJlZnJlc2giLCJhenAiOiJhcHAtbmVzdCIsInNlc3Npb25fc3RhdGUiOiI5YjM3YzdiZS0xNzJiLTQxMjItOWU4My00ZjBlZmZhYjIzOGEiLCJzY29wZSI6ImVtYWlsIHByb2ZpbGUiLCJzaWQiOiI5YjM3YzdiZS0xNzJiLTQxMjItOWU4My00ZjBlZmZhYjIzOGEifQ.SXkns3m_AU3yNpnb30HK9SZSC9Eg6OfkJQAwJ7g-RrQ",
    "token_type": "Bearer",
    "not-before-policy": 0,
    "session_state": "9b37c7be-172b-4122-9e83-4f0effab238a",
    "scope": "email profile"
```

Rota que verifica as informações do usuário com o access_token gerado na rota acima.

```bash
GET: http://localhost:8080/auth/realms/keycloak-nest/protocol/openid-connect/userinfo
Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJ2Sk04eFVNTFJCSkdENmJOUUpuYVdSWDk4bTFXVHJiY2VybTJQelhvd3dVIn0.eyJleHAiOjE2NDUwOTcwNzIsImlhdCI6MTY0NTA5Njc3MiwianRpIjoiYTdkMzM4ZTUtNzZmZC00Mzc3LTg4OGEtNzcwZjY5YjQ4NmMyIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2F1dGgvcmVhbG1zL2tleWNsb2FrLW5lc3QiLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiYjcwMTIyN2MtZmUwOC00MmFhLTkyNjctMTNiMDcwZWEyMWIyIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiYXBwLW5lc3QiLCJzZXNzaW9uX3N0YXRlIjoiOTUwNGRhODYtNmU2OS00MDA2LWJhOGMtYTA3ODMxNDdkNDNlIiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwOi8vbG9jYWxob3N0OjMwMDAiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iLCJkZWZhdWx0LXJvbGVzLWtleWNsb2FrLW5lc3QiXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6ImVtYWlsIHByb2ZpbGUiLCJzaWQiOiI5NTA0ZGE4Ni02ZTY5LTQwMDYtYmE4Yy1hMDc4MzE0N2Q0M2UiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibmFtZSI6Ikdpc2VsZSBUcml6b3R0ZSIsInByZWZlcnJlZF91c2VybmFtZSI6Imdpc2VsZS50cml6b3R0ZTFAZ21haWwuY29tIiwiZ2l2ZW5fbmFtZSI6Ikdpc2VsZSIsImZhbWlseV9uYW1lIjoiVHJpem90dGUiLCJlbWFpbCI6Imdpc2VsZS50cml6b3R0ZTFAZ21haWwuY29tIn0.Fu-af8lUx7GvTmDYGRQ4R9W5fixb8gUoieY9iLJ8UbDj-1V9Eo6mmZ_LzKeo58EHfHpSbhu0FPaV6UPCKRl_peCsBCaLW1W0RQzegGrS3em_pZVTURa_ksAt1ry2WFXmEtiEz2aR6vcKTILxT_3IEdqxtFz_XDwtrImR3V6eDVXJhbP2V7kRvUjAljrTRXdZsU-x9QGQAGlynOx4PPs2uKQs2wKDTD8uixsnI6voYg4A1QpwDECZ_Hi-qFLdaHyPT4tLHnuvXRicyIreIhLiVxO9o-p21Zds_AEpl84q97LqSRxHVRUxOkCsefeYwllFSuqEzezDfWqp8Gy-sxlA5Q
```

Retorno

```json
  "sub": "a149a59b-9111-4183-b347-a1533e3083d2",
  "email_verified": true,
  "name": "Gisele Teste",
  "subdomain": "tenent2",
  "preferred_username": "gisele@teste.com",
  "given_name": "Gisele",
  "family_name": "Teste",
  "email": "gisele@teste.com"
```
