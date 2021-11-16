import React from 'react'

export default function Vaksinasi() {
    return (
      <div>
          <div className="container mb-5">
            <div className="row">
              <div className="col pe-sm-5">
                <h4>Vaksinasi</h4>
                <p>
                  Vaksinasi adalah pemberian Vaksin dalam rangka meningkatkan
                  kekebalan tubuh seseorang terhadap suatu penyakit, sehingga
                  apabila suatu saat terpapar penyakit tersebut, tidak akan
                  sakit atau hanya mengalami gejala ringan dan tidak menjadi
                  sumber penularan.
                </p>
              </div>
              <div className="ps-sm-5">
                <h4>Bagaimana Cara Kerja Vaksin</h4>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/mJoNBM2Okys"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
    );
}
