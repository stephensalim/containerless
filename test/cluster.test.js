"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var mocha_typescript_1 = require("mocha-typescript");
var chai_1 = require("chai");
var cluster_1 = require("../cluster");
describe('with existing cluster', function () {
    var ClusterTest = (function () {
        function ClusterTest() {
            this.opts = {
                id: 'arn:aws:ecs:ap-southeast-2:005213230316:cluster/vtha-ECSCluster-1A5ZYNUN7X46N',
                security_group: 'sg-abcdef',
                vpcId: 'vpc-1',
                subnets: [
                    'subnet-12359e64',
                    'subnet-b442c0d0',
                    'subnet-a2b967fb'
                ]
            };
        }
        ClusterTest.prototype.before = function () {
            this.cluster = new cluster_1.Cluster(this.opts);
        };
        ClusterTest.prototype.id = function () {
            chai_1.expect(this.cluster.id).to.eq(this.opts.id);
        };
        ClusterTest.prototype.resources_empty = function () {
            chai_1.expect(this.cluster.generate()).to.be.empty;
        };
        return ClusterTest;
    }());
    __decorate([
        mocha_typescript_1.test
    ], ClusterTest.prototype, "id", null);
    __decorate([
        mocha_typescript_1.test
    ], ClusterTest.prototype, "resources_empty", null);
    ClusterTest = __decorate([
        mocha_typescript_1.suite
    ], ClusterTest);
});
describe('create a new cluster with HTTPS', function () {
    var ClusterTest = (function () {
        function ClusterTest() {
            this.opts = {
                vpcId: 'vpc-1',
                subnets: [
                    'subnet-12359e64',
                    'subnet-b442c0d0',
                    'subnet-a2b967fb'
                ],
                protocol: 'HTTPS',
                certificate: 'arn:aws:acm:ap-southeast-2:000000000001:certificate/95898b22-e903-4d31-a50a-a0d4473aa077'
            };
        }
        ClusterTest.prototype.before = function () {
            this.cluster = new cluster_1.Cluster(this.opts);
        };
        ClusterTest.prototype.id = function () {
            chai_1.expect(this.cluster.id).to.eql({ 'Ref': 'ContainerlessCluster' });
        };
        ClusterTest.prototype.resources_not_empty = function () {
            chai_1.expect(this.cluster.generate()).to.not.be.empty;
        };
        ClusterTest.prototype.sets_protocol = function () {
            chai_1.expect(this.cluster.protocol).to.eql('HTTPS');
        };
        ClusterTest.prototype.sets_port = function () {
            chai_1.expect(this.cluster.port).to.eql(443);
        };
        return ClusterTest;
    }());
    __decorate([
        mocha_typescript_1.test
    ], ClusterTest.prototype, "id", null);
    __decorate([
        mocha_typescript_1.test
    ], ClusterTest.prototype, "resources_not_empty", null);
    __decorate([
        mocha_typescript_1.test
    ], ClusterTest.prototype, "sets_protocol", null);
    __decorate([
        mocha_typescript_1.test
    ], ClusterTest.prototype, "sets_port", null);
    ClusterTest = __decorate([
        mocha_typescript_1.suite
    ], ClusterTest);
});
describe('create a new cluster with HTTP', function () {
    var ClusterTest = (function () {
        function ClusterTest() {
            this.opts = {
                vpcId: 'vpc-1',
                subnets: [
                    'subnet-12359e64',
                    'subnet-b442c0d0',
                    'subnet-a2b967fb'
                ],
                protocol: 'HTTP'
            };
        }
        ClusterTest.prototype.before = function () {
            this.cluster = new cluster_1.Cluster(this.opts);
        };
        ClusterTest.prototype.id = function () {
            chai_1.expect(this.cluster.id).to.eql({ 'Ref': 'ContainerlessCluster' });
        };
        ClusterTest.prototype.resources_not_empty = function () {
            chai_1.expect(this.cluster.generate()).to.not.be.empty;
        };
        ClusterTest.prototype.sets_protocol = function () {
            chai_1.expect(this.cluster.protocol).to.eql('HTTP');
        };
        ClusterTest.prototype.sets_port = function () {
            chai_1.expect(this.cluster.port).to.eql(80);
        };
        return ClusterTest;
    }());
    __decorate([
        mocha_typescript_1.test
    ], ClusterTest.prototype, "id", null);
    __decorate([
        mocha_typescript_1.test
    ], ClusterTest.prototype, "resources_not_empty", null);
    __decorate([
        mocha_typescript_1.test
    ], ClusterTest.prototype, "sets_protocol", null);
    __decorate([
        mocha_typescript_1.test
    ], ClusterTest.prototype, "sets_port", null);
    ClusterTest = __decorate([
        mocha_typescript_1.suite
    ], ClusterTest);
});
