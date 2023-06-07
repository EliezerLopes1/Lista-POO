import { Component } from "react";
import { Carrosel, Intro } from "./home";

export default class Inicio extends Component {
    render() {
        return(
            <>
            <Carrosel />
            <Intro />
            </>
        )
    }
}