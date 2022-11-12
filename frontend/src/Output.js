import React from "react";
import Meds from "./Meds";
import Alternatives from "./Alternatives";
import "./Output.css";

function Output() {
  return (
    <div className="output">
      <div className="output__row">
        <Meds
          className="item1"
          name=" DR Best Alprazolam 0.25 Tablet "
          tab_wt="0.25 g"
          price="Rs. 1/Tablet"
          composition="DR Best Alprazolam 0.25 Tablet belongs to a class of medicines known as benzodiazepines."
          uses="Treartment of Anxiety and Treatment of panic disorder."
          side_effects="Most side effects do not require any medical attention and disappear as your body adjusts to the medicine. Most common side effects are Lightheadedness and Drowsiness"
        />
        <h4>Alternatives: </h4>
        <div className="item">
          <div className="item2">
            <Alternatives
              name="Alltop 0.25mg Tablet"
              price="Rs. 0.18/Tablet"
              manuf="Ind Swift Laboratories Ltd"
              diff="82% cheaper"
            />
          </div>
          <div className="item3">
            <Alternatives
              name="Alprasafe 0.25mg Tablet"
              price="Rs. 0.25/Tablet"
              manuf="Zydus Healthcare Limited"
              diff="75% cheaper"
            />
          </div>
          <div className="item4">
            <Alternatives
              name="Nindra 0.25mg Tablet"
              price="Rs. 0.33/Tablet"
              manuf="Zydus Healthcare Limited"
              diff="67% cheaper"
            />
          </div>
        </div>
      </div>

      <div className="output__row">
        <Meds
          name=" Tramadol Injuction "
          tab_wt="50 mg"
          price="Rs. 5/ ml"
          composition="Tramadol is an opioid analgesic (pain reliever) which works by blocking transmission of pain signals to the brain to lower pain perception."
          uses="Tramadol is used for moderate to severe pain"
          side_effects="Most side effects are Headach, Dizziness, Sleepiness, Vomiting, Nausea, Constipation"
        />
        <h4>Alternatives: </h4>
        <div className="item">
          <div className="item2">
            <Alternatives
              name="Tramabax injuction 50mg"
              price="Rs. 29.9/ ml"
              manuf="Ranbaxy"
              diff="83.28% cheaper"
            />
          </div>
          <div className="item3">
            <Alternatives
              name="Tramabax injuction 50mg"
              price="Rs. 27.63/ ml"
              manuf="AHPL"
              diff="81.9% cheaper"
            />
          </div>
          <div className="item4">
            <Alternatives
              name="Tramabax injuction 50mg"
              price="Rs. 27/ ml"
              manuf="Health Biotech"
              diff="81.48% cheaper"
            />
          </div>
        </div>
      </div>
      <div className="output__row">
        <Meds
          className="item1"
          name=" Povidone Iodine Ointment "
          tab_wt="500 ml"
          price="Rs. 71/ 500ml"
          composition="Povidone 5% Ointment is an antiseptic and disinfectant agent."
          uses="Treartment of Anxiety and Treatment of panic disorder."
          side_effects="Most side effects do not require any medical attention and disappear as your body adjusts to the medicine. "
        />
        <h4>Alternatives: </h4>
        <div className="item">
          <div className="item2">
            <Alternatives
              name="Povikem topical Solution 5%"
              price="Rs. 0.18/Tablet"
              manuf="Ind Swift Laboratories Ltd"
              diff="82% cheaper"
            />
          </div>
          <div className="item3">
            <Alternatives
              name="Alprasafe 0.25mg Tablet"
              price="Rs. 0.25/Tablet"
              manuf="Zydus Healthcare Limited"
              diff="75% cheaper"
            />
          </div>
          <div className="item4">
            <Alternatives
              name="Nindra 0.25mg Tablet"
              price="Rs. 0.33/Tablet"
              manuf="Zydus Healthcare Limited"
              diff="67% cheaper"
            />
          </div>
        </div>
      </div>
      <div className="output__row">
        <Meds
          className="item1"
          name=" DR Best Alprazolam 0.25 Tablet "
          tab_wt="0.25 g"
          price="Rs. 1/Tablet"
          composition="DR Best Alprazolam 0.25 Tablet belongs to a class of medicines known as benzodiazepines."
          uses="Treartment of Anxiety and Treatment of panic disorder."
          side_effects="Most side effects do not require any medical attention and disappear as your body adjusts to the medicine. Most common side effects are Lightheadedness and Drowsiness"
        />
        <h4>Alternatives: </h4>
        <div className="item">
          <div className="item2">
            <Alternatives
              name="Alltop 0.25mg Tablet"
              price="Rs. 0.18/Tablet"
              manuf="Ind Swift Laboratories Ltd"
              diff="82% cheaper"
            />
          </div>
          <div className="item3">
            <Alternatives
              name="Alprasafe 0.25mg Tablet"
              price="Rs. 0.25/Tablet"
              manuf="Zydus Healthcare Limited"
              diff="75% cheaper"
            />
          </div>
          <div className="item4">
            <Alternatives
              name="Nindra 0.25mg Tablet"
              price="Rs. 0.33/Tablet"
              manuf="Zydus Healthcare Limited"
              diff="67% cheaper"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Output;
