"use strict";

const expect = require("chai").expect;
const errModel = require("../models/error");

let error;

describe("Error Model - New Error", () => {
	before(() => {
		error = errModel.newError("Error: this is an error", "user#1234");
	});

	it("error should be a valid object", (done) => {
		expect(error).to.not.be.an("undefined");
		expect(error).to.be.an("object");
		return done();
	});

	it("error should have required properties", (done) => {
		expect(error).to.have.property("error");
		expect(error).to.have.property("id");
		expect(error).to.have.property("message");
		expect(error).to.have.property("user");
		expect(error).to.have.property("dateTime");
		return done();
	});

	it("error should have the correct starting values", (done) => {
		expect(error.error).to.be.a("boolean");
		expect(error.error).to.equal(false);
		expect(error.id).to.be.a("string");
		expect(error.id.length).to.equal(36);
		expect(error.message).to.be.a("string");
		expect(error.message).to.equal("Error: this is an error");
		expect(error.user).to.be.a("string");
		expect(error.user).to.equal("user#1234");
		expect(error.dateTime).to.be.an("string");
		return done();
	});
});