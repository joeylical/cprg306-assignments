import Link from "next/link";

/*
 * item: object {
 *  name: string;
 *  url: string;
 *  description: string;
 */
const shortGithubLinkName = link => '@'+link.substring(19);
function GithubRepo(item) {
  return (
    <div key={item.url} className="m-5 p-2 border-2 border-solid rounded-[2vw]">
      <h2 className="font-bold">{item.name}</h2>
      <Link className="font-thin" target='_blank' href={item.url}>{shortGithubLinkName(item.url)}</Link>
    <hr className="bg-dark-300 my-2 mx-[-5px]" />
      <div className="font-normal">
        {item.description}
      </div>
    </div>
  );
}

const myRepos = [
  {
    name: 'cprg306-assignments ',
    url: 'https://github.com/joeylical/cprg306-assignments',
    description: 'Assignments of CPRG-306'
  },
  {
    name: 'cprg250_nix_env',
    url: 'https://github.com/joeylical/cprg250_nix_env',
    description: 'oracle db env'
  },
  {
    name: 'test_edit_distance',
    url: 'https://github.com/joeylical/test_edit_distance',
    description: 'test code for edit distance and myers distance'
  },
  {
    name: 'rocm_jupyterlab_docker',
    url: 'https://github.com/joeylical/rocm_jupyterlab_docker',
    description: 'files to create docker container'
  },
  {
    name: 'archieve_onnx_to_code',
    url: 'https://github.com/joeylical/archieve_onnx_to_code',
    description: 'test script to convert simple onnx model to C source codes'
  },
  {
    name: 'archieve_learning_picoGPT',
    url: 'https://github.com/joeylical/archieve_learning_picoGPT',
    description: 'An implement of "GPT in 60 Lines of Numpy" but of pytorch'
  },
  {
    name: 'archieve_MeshDeviceScanner',
    url: 'https://github.com/joeylical/archieve_MeshDeviceScanner',
    description: 'An Android App for listing nearby Bluetooth Mesh devices'
  },
  {
    name: 'archieve_PyBTMesh',
    url: 'https://github.com/joeylical/archieve_PyBTMesh',
    description: 'python script to encode/decode Bluetooth Mesh messages'
  },
  {
    name: 'archieve_flutter_kotlin_nfc_demo',
    url: 'https://github.com/joeylical/archieve_flutter_kotlin_nfc_demo',
    description: 'A demo of flutter/kotin/NFC on Android'
  },
  {
    name: 'archieve_my_crop_and_look',
    url: 'https://github.com/joeylical/archieve_my_crop_and_look',
    description: 'A program like powertoys Crop And Lock but written in 2012 with VB.Net'
  }
];

export default function StudentInfo() {
  return (
    <>
      <h1>Jiayi Li</h1>
      {myRepos.map(GithubRepo)}
    </>
  );
}
