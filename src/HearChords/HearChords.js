import React, { Component } from 'react';
import './HearChords.css';
import * as Tone from 'tone'

export default class HearChords extends Component {

    playChord = async () => {
        let note1 = new Tone.Player(process.env.PUBLIC_URL + '/Samples/le12.mp3').toDestination();
        let note2 = new Tone.Player(process.env.PUBLIC_URL + '/Samples/a14.mp3').toDestination();
        let note3 = new Tone.Player(process.env.PUBLIC_URL + '/Samples/d14.mp3').toDestination();
        let note4 = new Tone.Player(process.env.PUBLIC_URL + '/Samples/g12.mp3').toDestination();
        let note5 = new Tone.Player(process.env.PUBLIC_URL + '/Samples/b12.mp3').toDestination();
        let note6 = new Tone.Player(process.env.PUBLIC_URL + '/Samples/he12.mp3').toDestination();
        try{
            await Tone.loaded()
        }
        catch(e) {
            console.error(e)
            throw(e)
        }
        note1.start();
        note2.start();
        note3.start();
        note4.start();
        note5.start();
        note6.start();
    }


    render() {
        return (
            <>
                <button className='playButton' onClick={this.playChord}>PlayChord</button>
                <section className="guitar-neck" >
                    <div className="string">
                        <div className="fret" id="le0"></div>
                        <div className="fret" id="le1"></div>
                        <div className="fret" id="le2"></div>
                        <div className="fret inlay" id="le3"></div>
                        <div className="fret" id="le4"></div>
                        <div className="fret inlay" id="le5"></div>
                        <div className="fret" id="le6"></div>
                        <div className="fret inlay" id="le7"></div>
                        <div className="fret" id="le8"></div>
                        <div className="fret inlay" id="le9"></div>
                        <div className="fret" id="le10"></div>
                        <div className="fret" id="le11"></div>
                        <div className="fret" id="le12">
                            <div className="double-inlay"></div>
                        </div>
                        <div className="fret" id="le13"></div>
                        <div className="fret" id="le14"></div>
                        <div className="fret inlay" id="le15"></div>
                    </div>
                    <div className="string">
                        <div className="fret" id="a0"></div>
                        <div className="fret" id="a1"></div>
                        <div className="fret" id="a2"></div>
                        <div className="fret" id="a3"></div>
                        <div className="fret" id="a4"></div>
                        <div className="fret" id="a5"></div>
                        <div className="fret" id="a6"></div>
                        <div className="fret" id="a7"></div>
                        <div className="fret" id="a8"></div>
                        <div className="fret" id="a9"></div>
                        <div className="fret" id="a10"></div>
                        <div className="fret" id="a11"></div>
                        <div className="fret" id="a12"></div>
                        <div className="fret" id="a13"></div>
                        <div className="fret" id="a14"></div>
                        <div className="fret" id="a15"></div>
                    </div>
                    <div className="string">
                        <div className="fret" id="d0"></div>
                        <div className="fret" id="d1"></div>
                        <div className="fret" id="d2"></div>
                        <div className="fret" id="d3"></div>
                        <div className="fret" id="d4"></div>
                        <div className="fret" id="d5"></div>
                        <div className="fret" id="d6"></div>
                        <div className="fret" id="d7"></div>
                        <div className="fret" id="d8"></div>
                        <div className="fret" id="d9"></div>
                        <div className="fret" id="d10"></div>
                        <div className="fret" id="d11"></div>
                        <div className="fret" id="d12"></div>
                        <div className="fret" id="d13"></div>
                        <div className="fret" id="d14"></div>
                        <div className="fret" id="d15"></div>
                    </div>
                    <div className="string">
                        <div className="fret" id="g0"></div>
                        <div className="fret" id="g1"></div>
                        <div className="fret" id="g2"></div>
                        <div className="fret" id="g3"></div>
                        <div className="fret" id="g4"></div>
                        <div className="fret" id="g5"></div>
                        <div className="fret" id="g6"></div>
                        <div className="fret" id="g7"></div>
                        <div className="fret" id="g8"></div>
                        <div className="fret" id="g9"></div>
                        <div className="fret" id="g10"></div>
                        <div className="fret" id="g11"></div>
                        <div className="fret" id="g12"></div>
                        <div className="fret" id="g13"></div>
                        <div className="fret" id="g14"></div>
                        <div className="fret" id="g15"></div>
                    </div>
                    <div className="string">
                        <div className="fret" id="b0"></div>
                        <div className="fret" id="b1"></div>
                        <div className="fret" id="b2"></div>
                        <div className="fret" id="b3"></div>
                        <div className="fret" id="b4"></div>
                        <div className="fret" id="b5"></div>
                        <div className="fret" id="b6"></div>
                        <div className="fret" id="b7"></div>
                        <div className="fret" id="b8"></div>
                        <div className="fret" id="b9"></div>
                        <div className="fret" id="b10"></div>
                        <div className="fret" id="b11"></div>
                        <div className="fret" id="b12"></div>
                        <div className="fret" id="b13"></div>
                        <div className="fret" id="b14"></div>
                        <div className="fret" id="b15"></div>
                    </div>
                    <div className="string">
                        <div className="fret" id="he0"></div>
                        <div className="fret" id="he1"></div>
                        <div className="fret" id="he2"></div>
                        <div className="fret" id="he3"></div>
                        <div className="fret" id="he4"></div>
                        <div className="fret" id="he5"></div>
                        <div className="fret" id="he6"></div>
                        <div className="fret" id="he7"></div>
                        <div className="fret" id="he8"></div>
                        <div className="fret" id="he9"></div>
                        <div className="fret" id="he10"></div>
                        <div className="fret" id="he11"></div>
                        <div className="fret" id="he12"></div>
                        <div className="fret" id="he13"></div>
                        <div className="fret" id="he14"></div>
                        <div className="fret" id="he15"></div>
                    </div>
                </section>
            </>
        )
    }
}