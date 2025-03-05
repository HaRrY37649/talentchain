
import React from 'react';
import Layout from '@/components/Layout';
import { Code, FileCheck, Clock, Wallet, ShieldCheck, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SmartContracts = () => {
  return (
    <Layout>
      <div className="pt-24 pb-16">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Smart Contract Solutions</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Intellichain leverages blockchain technology to automate hiring workflows, verify credentials, and ensure transparent agreements between employers and candidates.
            </p>
            <Button size="lg" className="font-semibold">
              <Code className="mr-2 h-5 w-5" />
              Explore Smart Contracts
            </Button>
          </div>
          
          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <div className="bg-muted rounded-xl p-8 mb-8">
                <pre className="text-xs sm:text-sm md:text-base overflow-x-auto">
                  <code className="language-solidity">
{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CredentialVerification {
    struct Credential {
        string credentialType;
        string issuer;
        uint256 issueDate;
        bytes32 dataHash;
        bool isVerified;
    }
    
    mapping(address => Credential[]) public userCredentials;
    
    event CredentialAdded(
        address indexed user,
        string credentialType,
        string issuer
    );
    
    function addCredential(
        string memory _type,
        string memory _issuer,
        uint256 _issueDate,
        bytes32 _dataHash
    ) public {
        Credential memory newCred = Credential({
            credentialType: _type,
            issuer: _issuer,
            issueDate: _issueDate,
            dataHash: _dataHash,
            isVerified: false
        });
        
        userCredentials[msg.sender].push(newCred);
        
        emit CredentialAdded(
            msg.sender,
            _type,
            _issuer
        );
    }
}`}
                  </code>
                </pre>
              </div>
              
              <div className="flex justify-center">
                <Button variant="outline" size="sm" className="mr-4">
                  <FileCheck className="mr-2 h-4 w-4" /> View on Etherscan
                </Button>
                <Button variant="outline" size="sm">
                  <Code className="mr-2 h-4 w-4" /> Documentation
                </Button>
              </div>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold">How Our Smart Contracts Work</h2>
              <p className="text-muted-foreground">
                Smart contracts are self-executing programs stored on the blockchain that run when predetermined conditions are met. Intellichain uses them to automate and secure the hiring process.
              </p>
              
              <div className="space-y-6 mt-8">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <ShieldCheck className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Credential Verification</h3>
                    <p className="text-muted-foreground">Store and verify educational credentials, certifications, and work history on-chain, providing immutable proof of qualifications.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Employment Agreements</h3>
                    <p className="text-muted-foreground">Automate employment contracts with predefined terms, milestones, and payment schedules that execute automatically.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <Wallet className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Token-Based Incentives</h3>
                    <p className="text-muted-foreground">Reward system for referrals, successful placements, and platform participation using our native token economy.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Use Cases */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-center mb-12">Smart Contract Use Cases</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-muted p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">For Employers</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    <span>Instant verification of candidate credentials</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    <span>Automated job offer and contract generation</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    <span>Performance-based payment structures</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    <span>Escrow services for freelance engagements</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-muted p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">For Job Seekers</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    <span>Secure storage of verified credentials</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    <span>Selective sharing of personal information</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    <span>Guaranteed payment for completed work</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    <span>Tokenized rewards for platform participation</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-muted p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">For Educational Institutions</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    <span>Issue verifiable digital credentials</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    <span>Reduce credential fraud and misrepresentation</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    <span>Track credential usage and employment outcomes</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    <span>Create blockchain-verified learning pathways</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Technical Documentation */}
          <div className="bg-muted p-8 rounded-xl mb-16">
            <h2 className="text-2xl font-bold mb-6">Technical Documentation</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Smart Contract Architecture</h3>
                <p className="text-muted-foreground mb-4">
                  Our smart contracts are built on Ethereum using Solidity with upgradable proxy patterns to ensure future flexibility. The system consists of several interconnected contracts:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>CredentialRegistry.sol - Stores and verifies user credentials</li>
                  <li>EmploymentContract.sol - Handles job offers and agreements</li>
                  <li>EscrowService.sol - Manages secure payments</li>
                  <li>ReputationToken.sol - Handles the platform's token economy</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Integration Options</h3>
                <p className="text-muted-foreground mb-4">
                  Intellichain offers multiple ways to integrate with our smart contract infrastructure:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Direct Web3 integration using our JavaScript SDK</li>
                  <li>REST API endpoints for traditional backend systems</li>
                  <li>Webhook notifications for smart contract events</li>
                  <li>GraphQL API for complex data queries</li>
                </ul>
                <div className="mt-6">
                  <Button>
                    <Code className="mr-2 h-4 w-4" />
                    View Developer Documentation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SmartContracts;
