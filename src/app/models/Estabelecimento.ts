export class Estabelecimento {
  constructor(
    public nome: string,
    public cnesId: string,
    public cnpj: string,
    public nomeEmpresarial: string,
    public naturazeJuridica: string,
    public logradouro: string,
    public numero: string,
    public complemento: string,
    public bairro: string,
    public municipio: string,
    public uf: string,
    public cep: string,
    public telefone: string,
    public dependencia: string,
    public regionalSaude: string,
    public tipoEstabelecimento: string,
    public subtipoEstabelecimento: string,
    public gestao: string,
    public diretorioClinicoGerenteAdministrador: string,
    public cadastradoEm: string,
    public atualizadoLocalEm: string,
    public atualizadoNacionalEm: string,
    public horarioFuncionamento: string,
    public desativadoEm: string,
    public modoDesaticacao: string
  ) {}
}
