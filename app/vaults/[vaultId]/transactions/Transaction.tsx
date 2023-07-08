import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { truncate } from '@/lib/utils';
import { TransactionStatus, TransactionType, TransactionTypeLabel } from '@/types/enums';
import { ItemPrimary, ItemSecondary } from './Items';

interface Props {
  type: TransactionType;
  amount: number;
  to: string;
  status: TransactionStatus;
  confirmations: number;
  author: string;
  createdAt: string;
  threshold: number;
  executedAt?: string;
  rejections: number;
}

const Transaction: React.FC<Props> = ({
  type,
  amount,
  to,
  status,
  confirmations,
  author,
  createdAt,
  executedAt,
  rejections,
  threshold,
}) => {
  //FIXME: Hardcoded values
  const numberOfOwners = 3;

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full border-2 px-6 rounded-3xl cursor-pointer border-slate-50 hover:border-red-500"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <div className="w-full flex justify-between items-center h-[70px] pr-3">
            <ItemPrimary title={'Type'} value={TransactionTypeLabel[type]} />
            <ItemPrimary title={'Amount'} value={`${amount}`} />
            <ItemPrimary title={'Recepient'} value={truncate(to, 4, 4, 11)} />
            <ItemPrimary title={'Status'} value={status} />
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div
            className="w-full flex justify-between items-center pr-3 gap-6"
            // onClick={() => router.push(`/vaults/${id}`)}
          >
            <Card className="w-full min-h-[256px]">
              <CardHeader>
                <CardTitle className="text-lg">Info</CardTitle>
                {/* <CardDescription>Deploy your new project in one-click.</CardDescription> */}
              </CardHeader>
              <CardContent className="text-lg">
                <div className="flex flex-col gap-2">
                  <ItemSecondary title={'Author'} value={truncate(author, 4, 4, 11)} />
                  <ItemSecondary title={'Created At'} value={createdAt} />
                  <ItemSecondary title={'Executed on'} value={executedAt ?? 'n/a'} />
                </div>
              </CardContent>
            </Card>
            <Card className="w-full min-h-[256px]">
              <CardHeader>
                <CardTitle className="text-lg">Status</CardTitle>
                {/* <CardDescription>Deploy your new project in one-click.</CardDescription> */}
              </CardHeader>
              <CardContent className="flex gap-1">
                <Card className="w-full text-center bg-slate-700">
                  <CardHeader className="p-3">
                    <CardTitle className="text-3xl text-green-400">{confirmations}</CardTitle>
                  </CardHeader>
                  <CardContent className="px-3 py-2 pt-0">Confirmed</CardContent>
                </Card>
                <Card className="w-full bg-slate-700 text-center">
                  <CardHeader className="p-3">
                    <CardTitle className="text-3xl text-red-400">{rejections}</CardTitle>
                  </CardHeader>
                  <CardContent className="px-3 py-2 pt-0">Rejected</CardContent>
                </Card>
                <Card className="w-full bg-slate-700 text-center">
                  <CardHeader className="p-3">
                    <CardTitle className="text-3xl">
                      {threshold}/{numberOfOwners}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-3 py-2 pt-0">Threshold</CardContent>
                </Card>
              </CardContent>
              <CardFooter className="flex justify-between gap-3">
                <Button className="w-full rounded-xl" variant="outline">
                  Reject
                </Button>
                <Button className="w-full rounded-xl">Confirm</Button>
              </CardFooter>
            </Card>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default Transaction;
