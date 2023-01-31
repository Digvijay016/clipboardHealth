# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

This is a problem which needs a different function 'createCustomId'. We have a table of Facilities, Agents and Shifts table. The function 'generateReport' gives us the brief idea of agent id.

Now my function 'createCustomId' will have one parameter 'customId'. First I will fetch the loggedIn agentId so that I can map it to the agent id he has worked with. Let's call him 'currentAgent'.

'currentAgent' will enter 'agentWorkedWithName' and 'customId'. We will save this data in a new table 'CustomAgentTable'. But how can we map that agent with the customId. The answer is to use the 'getShiftsByFacility' function to get the shift of that agent during that time and match it with name and Id. Now we will match this agent shift with the shift we have to get agent Id and mapped it to customId that was created by current user.

This way this function can map the customId with the appropriate agents and save it in database.
