#include(bits/stdc++.h)
struct node{
  int data ;
  struct node *nxt;
}

void insert(int a,struct node **head)
  {
    struct node *new=(struct node *)malloc(sizeof(struct node));
    new->data =a;
    new->nxt=head;
    head=new;
  }
  void reverse()
  {
    struct node *t;
    struct node *p;
    struct node *c;
    while(c!=NULL)
    {
      temp=c->nxt;
      current ->nxt=p;
      p=c;
      c= t;
    }
  }
void main()
{
  struct node *head=NULL;
insert (1,&head);
insert(2,&head);
insert(3,&head);
insert(4,&head);
  reverse();
  while(head!=NULL)
  {
    cout<<head->data;
    head= head->nxt;
  }
}
