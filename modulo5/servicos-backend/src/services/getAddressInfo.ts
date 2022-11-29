import axios from "axios";

async function getAddressInfo(cep: string) {
  try {
    const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json`);
    console.log(data);

    return `${data.logradouro}, ${data.gia}, ${data.complemento}, ${data.bairro}, ${data.localidade} - ${data.uf}, ${data.cep}`;
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export default getAddressInfo;
