---
title: "CPU"
folder: "hardware"
excerpt: "Note on what a CPU is and how it functions"
date: "2023-02-18"
---

CPU stands for central processing unit which processes instructions provided by a computer program. One such example of an instruction set that a CPU might understand is the x86 instruction set which is a machine specific low-level assembly language. Typically when you write some code for a program it will be in a high-level language which will then be compiled to some sort of machine code which can then be executed by the CPU or interpreted which skips the compiling step (no machine code directly saved) and supplys the CPU with interpreted instructions from the high-level language.

## Transistor

A single CPU is made up of many millions of transistors which operates as a semiconductor controlling electrical signals which act as switches/gates. The transistor works in a way that allows a computer to speak in binary (0s and 1s). A current can either flow through or not which translate to either a 1 or a 0. This functionality can be used in different configurations to form logic gates. Logic gates perform logical operations which take in binary inputs and produce a binary output. There are several different logic gates, a couple basic ones are AND and OR. For AND, all the inputs must be true, that is all binary inputs must be 1. For OR, only one of the inputs must be true, one binary input must be 1.

## Instruction Cycle

The instruction cycle is the cycle that a CPU follows from the time the device boots up until the time it shuts down. This cycle consists of three standard stages: fetch, decode and execute.

- **Fetch** stage involves retreiving instructions from the devices memory. The location (address) of the instruction in memory is determined by the program counter which indicates where a device is in its program sequence. Once an instruction is fetched, the device increments by the length of the instruction so that the address of the next instruction will now be in the sequence.
- **Decode** stage takes the instructions that the CPU fetched from above and utilizes binary decoder circuitry (also known as the instruction decoder) to convert the instructions into signals that control other parts of the CPU. A binary decoder is an electronic circuit with multiple input and output signals which convert every unique combination of input states into a specific combination of output states. One group of bits within the decoded instruction (called the opcode or operation code) indicates which operation is to be performed, while the remaining fields provide supplemental information required for the operation (such as operands).
- **Execute** stage may have involve a single action or a sequence of actions. During each action, appropriate circuitry is activated to perform the desired operation. Once completed, the device restarts the instruction cycle (back to the fetch stage).

## CPU Core

A CPU core is a CPU's processor. Today, CPUs may have between 2 and 18 cores. One core can focus on one task at a time, that is one core can read and execute program instructions one after another. Adding multiple cores allows the device to perform multiple operations (or instruction cycles) at the same time. Two or more cores in a device is referred to as _multiprocessing_, which is different from _multithreading_ (see below).

## Multithreading

Multithreading is the ability of a single core to perform multiple threads of execution at the same time. A thread refers to a virtual component that handles the task of a CPU core. This divides a physical core into multiple virtual cores. Essentially one thread in one core can perform one task at a time and two threads, provided that resources are available, can perform two tasks concurrently. When multiple threads are utilized, the execute independently of each other but they share process resources. A single CPU can have up to 2 threads per core.
