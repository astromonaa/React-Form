export interface ITemplateProps {
  setForgot: (val:boolean) => void
}
export interface IFormProps {
  children: React.ReactNode | React.ReactChild
}

export interface IModalProps {
  children: React.ReactChild | React.ReactNode,
  className: string
}