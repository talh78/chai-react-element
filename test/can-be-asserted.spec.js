import 'source-map-support/register';
import {expect} from 'chai';
import predicate from '../src/can-be-asserted';
import React from 'react';

describe('The assertion predicate', function() {
    it('accepts a single ReactElement', function() {
        expect(predicate(<div></div>)).to.be.true;
    });

    it('accepts a single ReactElement with a prop', function() {
        expect(predicate(<div data-foo="bar"></div>)).to.be.true;
    });

    it('accepts a nested ReactElement hierarchy', function() {
        expect(predicate(<div><span></span></div>)).to.be.true;
    });

    it('accepts an object with a type field', function() {
        expect(predicate({type: 'div'})).to.be.true;
    });

    it('accepts an object with props', function() {
        expect(predicate({type: 'div', props: {}})).to.be.true;
    });

    it('rejects undefined', function() {
        expect(predicate()).to.be.false;
    });

    it('rejects null', function() {
        expect(predicate(null)).to.be.false;
    });

    it('rejects a string', function() {
        expect(predicate('foo')).to.be.false;
    });

    it('rejects an object without type', function() {
        expect(predicate({})).to.be.false;
    });

    it('rejects an object with a type property that is not a string', function() {
        expect(predicate({type: 1})).to.be.false;
    });

    it('accepts an object with a props property that is not an object', function() {
        expect(predicate({type: 'div', props: 1})).to.be.false;
    });

});