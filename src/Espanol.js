import React from "react";
import Layout from "./Layout";

const Espanol = () => {
  return (
    <Layout>
      <h2>Espanol</h2>
      <table id="spanish">
    
        <tbody>
          <tr>
            <th>Indefinido</th>
            <th>Preterito Perfecto</th>
          </tr>
          <tr>
            <th>Vergangenheit, konkrette Zeitangabe.</th>
            <th>Vergangenheit, aber entweder der Zeitraum noch nicht abgeschlossen ist 
                <br></br> 
                oder gerade eben abgeschlossen wurde (+-24h). Unkonkrete Zeit angabe.</th>
          </tr>
          <tr>
            <td>
              <h4 class="explanation">Wir befinden uns ausserhalb des Zeitraum der beendet ist</h4>
              <span class="example ex1">Ayer</span>
              <span class="example ex1">El año pasado</span>
            </td>
            <td>
              <h4 class="explanation">Zeitraum der noch nicht beendet ist</h4>
              <span class="example ex2">Hoy </span>
              <span class="example ex2">Este mes </span>
              <span class="example ex2">Este verano </span>
            </td>
          </tr>
          <tr>
            <td>
              <h4 class="explanation">Zeitraum der länger schon abgeschlossen ist - thumb rule: meher als 24h</h4>
              <span class="example ex1">Hace dos dias</span>
              <span class="example ex1">hace tres semanas</span>
              <span class="example ex1">hace un par der años</span>
            </td>
            <td>
              <h4 class="explanation">Zeitraum der gerade eben abgeschlossen ist - thumb rule: weniger als 24h</h4>
              <span class="example ex2">Hace una hora</span>
              <span class="example ex2">Hace 5 mintos</span>
              <span class="example ex2">Hace un momento</span>
              <span class="example ex2">Hace un rato</span>
              <hr></hr>
              <span class="example ex2">Ultimamente</span>
              <span class="example ex2">En los ulitmas dias</span>
              <span class="example ex2">En las ultimas semanas</span>
              <span class="example ex2">Recientemente</span>
            </td>
          </tr>
          <tr>
            <td>
                <h4 class="explanation">Zeitraum der gerade eben abgeschlossen ist - thumb rule: weniger als 24h</h4>
                <span class="example ex1">En 1992</span>
                <span class="example ex1">Anoche</span>
                <span class="example ex1">Anteayer</span>
                <span class="example ex1">Mes pasado</span>
                <span class="example ex1">La semana pasada</span>
            </td>
            <td>
                <h4 class="explanation">Zeitraum ist unwichitg</h4>
                <span class="example ex2">Nunca</span>
                <span class="example ex2">Siempre</span>
                <span class="example ex2">Muchas veces</span>
                <span class="example ex2">Alguna vez</span>
            </td>
          </tr>
          <tr>
            <td> 
              <table id="creating">
                <tbody>
                  <tr>
                    <th>AR</th>
                    <th>ER & IR</th>
                    <th>SER = IR</th>
                  </tr>
                  <tr>
                    <td><div class="main">mir<span class="ending">é</span></div> </td>
                    <td><span class="main">com<span class="ending">í</span></span></td>
                    <td><span class="main">fu<span class="ending">í</span></span></td>
                  </tr>
                  <tr>
                    <td><div class="main">mir<span class="ending">aste</span> </div> </td>
                    <td><span class="main">com<span class="ending">iste</span></span></td>
                    <td><span class="main">fu<span class="ending">iste</span></span></td>
                  </tr>
                  <tr>
                    <td><div class="main">mir<span class="ending">ó</span>  </div> </td>
                    <td><span class="main">com<span class="ending">ió</span></span></td>
                    <td><span class="main">fue</span></td>
                  </tr>
                  <tr>
                    <td><div class="main">mir<span class="ending">amos</span> </div> </td>
                    <td><span class="main">com<span class="ending">imos</span></span> </td>
                    <td><span class="main">fu<span class="ending">imos</span></span> </td>
                  </tr>
                  <tr>
                    <td><div class="main">mir<span class="ending">ásteis</span> </div> </td>
                    <td><span class="main">com<span class="ending">isteis</span></span></td>
                    <td><span class="main">fu<span class="ending">isteis</span></span></td>
                  </tr>
                  <tr>
                    <td> <div class="main">mir<span class="ending">aron</span> </div> </td>
                    <td><span class="main">com<span class="ending">ieron</span></span></td>
                    <td><span class="main">fueron</span></td>
                  </tr>
                </tbody>
                </table>              
            </td>
            <td>
            <table id="creating">
                <tbody>
                <tr>
                    <th>PERSON</th>
                    <th>ER & IR = IDO | AR = ADO</th>
                  </tr>
                  <tr>
                    <td><div class="main">he</div> </td>
                    <td rowspan="6">
                      trabaj<span class="ending">ado</span>
                      <br></br>
                      est<span class="ending">ado</span>
                      <br></br>
                      viv<span class="ending">ido</span>
                      <br></br>
                      aprent<span class="ending">ido</span>
                      <br></br>
                      <span class="ending">ido</span>
                      <br></br>
                      s<span class="ending">ido</span>
                      <br></br>
                    </td>
                  </tr>
              
                  <tr>
                    <td><div class="main">has</div> </td>
                  </tr>
                  <tr>
                    <td><div class="main">ha / ay</div> </td>
                  </tr>
                  <tr>
                    <td><div class="main">hemos</div> </td>
                  </tr>
                  <tr>
                    <td><div class="main">habeis</div> </td>
                  </tr>
                  <tr>
                    <td><div class="main">han</div> </td>
                  </tr>
                </tbody>
                </table>     
            </td>
          </tr>
  
        </tbody>
      </table>
    </Layout>
  );
};

export default Espanol;
