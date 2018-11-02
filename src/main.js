import Vue from "vue";
import wrap from "@vue/web-component-wrapper";
import ie_wc from "./ie-webcomponent";

Object
    .entries({ "ie-webcomponent" : ie_wc })
    .map( ([ key, component ]) => [ key, wrap( Vue, component ) ] )
    .forEach( ([ name, element ]) => window.customElements.define( name, element ) );
