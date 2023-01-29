// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v3.19.0
// source: poker.proto

package api

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

// v1.0.0
// protocol
type ProtoWrap struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Ver     int32  `protobuf:"varint,1,opt,name=ver,proto3" json:"ver,omitempty"`         // version
	Op      int32  `protobuf:"varint,2,opt,name=op,proto3" json:"op,omitempty"`           // option/action
	Seq     int32  `protobuf:"varint,3,opt,name=seq,proto3" json:"seq,omitempty"`         // sequence
	Success bool   `protobuf:"varint,4,opt,name=success,proto3" json:"success,omitempty"` // 请求是否成功
	Body    []byte `protobuf:"bytes,7,opt,name=body,proto3" json:"body,omitempty"`        // proto bytes
}

func (x *ProtoWrap) Reset() {
	*x = ProtoWrap{}
	if protoimpl.UnsafeEnabled {
		mi := &file_poker_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ProtoWrap) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ProtoWrap) ProtoMessage() {}

func (x *ProtoWrap) ProtoReflect() protoreflect.Message {
	mi := &file_poker_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ProtoWrap.ProtoReflect.Descriptor instead.
func (*ProtoWrap) Descriptor() ([]byte, []int) {
	return file_poker_proto_rawDescGZIP(), []int{0}
}

func (x *ProtoWrap) GetVer() int32 {
	if x != nil {
		return x.Ver
	}
	return 0
}

func (x *ProtoWrap) GetOp() int32 {
	if x != nil {
		return x.Op
	}
	return 0
}

func (x *ProtoWrap) GetSeq() int32 {
	if x != nil {
		return x.Seq
	}
	return 0
}

func (x *ProtoWrap) GetSuccess() bool {
	if x != nil {
		return x.Success
	}
	return false
}

func (x *ProtoWrap) GetBody() []byte {
	if x != nil {
		return x.Body
	}
	return nil
}

type Ping struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *Ping) Reset() {
	*x = Ping{}
	if protoimpl.UnsafeEnabled {
		mi := &file_poker_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Ping) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Ping) ProtoMessage() {}

func (x *Ping) ProtoReflect() protoreflect.Message {
	mi := &file_poker_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Ping.ProtoReflect.Descriptor instead.
func (*Ping) Descriptor() ([]byte, []int) {
	return file_poker_proto_rawDescGZIP(), []int{1}
}

type Pong struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *Pong) Reset() {
	*x = Pong{}
	if protoimpl.UnsafeEnabled {
		mi := &file_poker_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Pong) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Pong) ProtoMessage() {}

func (x *Pong) ProtoReflect() protoreflect.Message {
	mi := &file_poker_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Pong.ProtoReflect.Descriptor instead.
func (*Pong) Descriptor() ([]byte, []int) {
	return file_poker_proto_rawDescGZIP(), []int{2}
}

// 成功消息
type ResSuccess struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *ResSuccess) Reset() {
	*x = ResSuccess{}
	if protoimpl.UnsafeEnabled {
		mi := &file_poker_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ResSuccess) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ResSuccess) ProtoMessage() {}

func (x *ResSuccess) ProtoReflect() protoreflect.Message {
	mi := &file_poker_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ResSuccess.ProtoReflect.Descriptor instead.
func (*ResSuccess) Descriptor() ([]byte, []int) {
	return file_poker_proto_rawDescGZIP(), []int{3}
}

// 失败响应
type ResFail struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Msg string `protobuf:"bytes,3,opt,name=msg,proto3" json:"msg,omitempty"` // 失败消息
}

func (x *ResFail) Reset() {
	*x = ResFail{}
	if protoimpl.UnsafeEnabled {
		mi := &file_poker_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ResFail) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ResFail) ProtoMessage() {}

func (x *ResFail) ProtoReflect() protoreflect.Message {
	mi := &file_poker_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ResFail.ProtoReflect.Descriptor instead.
func (*ResFail) Descriptor() ([]byte, []int) {
	return file_poker_proto_rawDescGZIP(), []int{4}
}

func (x *ResFail) GetMsg() string {
	if x != nil {
		return x.Msg
	}
	return ""
}

type ReqIdentity struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Token string `protobuf:"bytes,1,opt,name=token,proto3" json:"token,omitempty"`
}

func (x *ReqIdentity) Reset() {
	*x = ReqIdentity{}
	if protoimpl.UnsafeEnabled {
		mi := &file_poker_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ReqIdentity) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ReqIdentity) ProtoMessage() {}

func (x *ReqIdentity) ProtoReflect() protoreflect.Message {
	mi := &file_poker_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ReqIdentity.ProtoReflect.Descriptor instead.
func (*ReqIdentity) Descriptor() ([]byte, []int) {
	return file_poker_proto_rawDescGZIP(), []int{5}
}

func (x *ReqIdentity) GetToken() string {
	if x != nil {
		return x.Token
	}
	return ""
}

type ResIdentity struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Status int32  `protobuf:"varint,1,opt,name=status,proto3" json:"status,omitempty"`
	Msg    string `protobuf:"bytes,2,opt,name=msg,proto3" json:"msg,omitempty"`
}

func (x *ResIdentity) Reset() {
	*x = ResIdentity{}
	if protoimpl.UnsafeEnabled {
		mi := &file_poker_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ResIdentity) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ResIdentity) ProtoMessage() {}

func (x *ResIdentity) ProtoReflect() protoreflect.Message {
	mi := &file_poker_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ResIdentity.ProtoReflect.Descriptor instead.
func (*ResIdentity) Descriptor() ([]byte, []int) {
	return file_poker_proto_rawDescGZIP(), []int{6}
}

func (x *ResIdentity) GetStatus() int32 {
	if x != nil {
		return x.Status
	}
	return 0
}

func (x *ResIdentity) GetMsg() string {
	if x != nil {
		return x.Msg
	}
	return ""
}

type ReqLobbyView struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *ReqLobbyView) Reset() {
	*x = ReqLobbyView{}
	if protoimpl.UnsafeEnabled {
		mi := &file_poker_proto_msgTypes[7]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ReqLobbyView) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ReqLobbyView) ProtoMessage() {}

func (x *ReqLobbyView) ProtoReflect() protoreflect.Message {
	mi := &file_poker_proto_msgTypes[7]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ReqLobbyView.ProtoReflect.Descriptor instead.
func (*ReqLobbyView) Descriptor() ([]byte, []int) {
	return file_poker_proto_rawDescGZIP(), []int{7}
}

type ResLobbyView struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *ResLobbyView) Reset() {
	*x = ResLobbyView{}
	if protoimpl.UnsafeEnabled {
		mi := &file_poker_proto_msgTypes[8]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ResLobbyView) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ResLobbyView) ProtoMessage() {}

func (x *ResLobbyView) ProtoReflect() protoreflect.Message {
	mi := &file_poker_proto_msgTypes[8]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ResLobbyView.ProtoReflect.Descriptor instead.
func (*ResLobbyView) Descriptor() ([]byte, []int) {
	return file_poker_proto_rawDescGZIP(), []int{8}
}

type ReqCreateTable struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Players int32 `protobuf:"varint,1,opt,name=players,proto3" json:"players,omitempty"`
	Robots  int32 `protobuf:"varint,2,opt,name=robots,proto3" json:"robots,omitempty"`
}

func (x *ReqCreateTable) Reset() {
	*x = ReqCreateTable{}
	if protoimpl.UnsafeEnabled {
		mi := &file_poker_proto_msgTypes[9]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ReqCreateTable) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ReqCreateTable) ProtoMessage() {}

func (x *ReqCreateTable) ProtoReflect() protoreflect.Message {
	mi := &file_poker_proto_msgTypes[9]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ReqCreateTable.ProtoReflect.Descriptor instead.
func (*ReqCreateTable) Descriptor() ([]byte, []int) {
	return file_poker_proto_rawDescGZIP(), []int{9}
}

func (x *ReqCreateTable) GetPlayers() int32 {
	if x != nil {
		return x.Players
	}
	return 0
}

func (x *ReqCreateTable) GetRobots() int32 {
	if x != nil {
		return x.Robots
	}
	return 0
}

type ResCreateTable struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	TableNo int32 `protobuf:"varint,1,opt,name=tableNo,proto3" json:"tableNo,omitempty"`
}

func (x *ResCreateTable) Reset() {
	*x = ResCreateTable{}
	if protoimpl.UnsafeEnabled {
		mi := &file_poker_proto_msgTypes[10]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ResCreateTable) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ResCreateTable) ProtoMessage() {}

func (x *ResCreateTable) ProtoReflect() protoreflect.Message {
	mi := &file_poker_proto_msgTypes[10]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ResCreateTable.ProtoReflect.Descriptor instead.
func (*ResCreateTable) Descriptor() ([]byte, []int) {
	return file_poker_proto_rawDescGZIP(), []int{10}
}

func (x *ResCreateTable) GetTableNo() int32 {
	if x != nil {
		return x.TableNo
	}
	return 0
}

type ReqJoinTable struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *ReqJoinTable) Reset() {
	*x = ReqJoinTable{}
	if protoimpl.UnsafeEnabled {
		mi := &file_poker_proto_msgTypes[11]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ReqJoinTable) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ReqJoinTable) ProtoMessage() {}

func (x *ReqJoinTable) ProtoReflect() protoreflect.Message {
	mi := &file_poker_proto_msgTypes[11]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ReqJoinTable.ProtoReflect.Descriptor instead.
func (*ReqJoinTable) Descriptor() ([]byte, []int) {
	return file_poker_proto_rawDescGZIP(), []int{11}
}

type ResJoinTable struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *ResJoinTable) Reset() {
	*x = ResJoinTable{}
	if protoimpl.UnsafeEnabled {
		mi := &file_poker_proto_msgTypes[12]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ResJoinTable) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ResJoinTable) ProtoMessage() {}

func (x *ResJoinTable) ProtoReflect() protoreflect.Message {
	mi := &file_poker_proto_msgTypes[12]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ResJoinTable.ProtoReflect.Descriptor instead.
func (*ResJoinTable) Descriptor() ([]byte, []int) {
	return file_poker_proto_rawDescGZIP(), []int{12}
}

var File_poker_proto protoreflect.FileDescriptor

var file_poker_proto_rawDesc = []byte{
	0x0a, 0x0b, 0x70, 0x6f, 0x6b, 0x65, 0x72, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x03, 0x61,
	0x70, 0x69, 0x22, 0x6d, 0x0a, 0x09, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x57, 0x72, 0x61, 0x70, 0x12,
	0x10, 0x0a, 0x03, 0x76, 0x65, 0x72, 0x18, 0x01, 0x20, 0x01, 0x28, 0x05, 0x52, 0x03, 0x76, 0x65,
	0x72, 0x12, 0x0e, 0x0a, 0x02, 0x6f, 0x70, 0x18, 0x02, 0x20, 0x01, 0x28, 0x05, 0x52, 0x02, 0x6f,
	0x70, 0x12, 0x10, 0x0a, 0x03, 0x73, 0x65, 0x71, 0x18, 0x03, 0x20, 0x01, 0x28, 0x05, 0x52, 0x03,
	0x73, 0x65, 0x71, 0x12, 0x18, 0x0a, 0x07, 0x73, 0x75, 0x63, 0x63, 0x65, 0x73, 0x73, 0x18, 0x04,
	0x20, 0x01, 0x28, 0x08, 0x52, 0x07, 0x73, 0x75, 0x63, 0x63, 0x65, 0x73, 0x73, 0x12, 0x12, 0x0a,
	0x04, 0x62, 0x6f, 0x64, 0x79, 0x18, 0x07, 0x20, 0x01, 0x28, 0x0c, 0x52, 0x04, 0x62, 0x6f, 0x64,
	0x79, 0x22, 0x06, 0x0a, 0x04, 0x50, 0x69, 0x6e, 0x67, 0x22, 0x06, 0x0a, 0x04, 0x50, 0x6f, 0x6e,
	0x67, 0x22, 0x0c, 0x0a, 0x0a, 0x52, 0x65, 0x73, 0x53, 0x75, 0x63, 0x63, 0x65, 0x73, 0x73, 0x22,
	0x1b, 0x0a, 0x07, 0x52, 0x65, 0x73, 0x46, 0x61, 0x69, 0x6c, 0x12, 0x10, 0x0a, 0x03, 0x6d, 0x73,
	0x67, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x6d, 0x73, 0x67, 0x22, 0x23, 0x0a, 0x0b,
	0x52, 0x65, 0x71, 0x49, 0x64, 0x65, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x12, 0x14, 0x0a, 0x05, 0x74,
	0x6f, 0x6b, 0x65, 0x6e, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x74, 0x6f, 0x6b, 0x65,
	0x6e, 0x22, 0x37, 0x0a, 0x0b, 0x52, 0x65, 0x73, 0x49, 0x64, 0x65, 0x6e, 0x74, 0x69, 0x74, 0x79,
	0x12, 0x16, 0x0a, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x18, 0x01, 0x20, 0x01, 0x28, 0x05,
	0x52, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x12, 0x10, 0x0a, 0x03, 0x6d, 0x73, 0x67, 0x18,
	0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x6d, 0x73, 0x67, 0x22, 0x0e, 0x0a, 0x0c, 0x52, 0x65,
	0x71, 0x4c, 0x6f, 0x62, 0x62, 0x79, 0x56, 0x69, 0x65, 0x77, 0x22, 0x0e, 0x0a, 0x0c, 0x52, 0x65,
	0x73, 0x4c, 0x6f, 0x62, 0x62, 0x79, 0x56, 0x69, 0x65, 0x77, 0x22, 0x42, 0x0a, 0x0e, 0x52, 0x65,
	0x71, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x54, 0x61, 0x62, 0x6c, 0x65, 0x12, 0x18, 0x0a, 0x07,
	0x70, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x73, 0x18, 0x01, 0x20, 0x01, 0x28, 0x05, 0x52, 0x07, 0x70,
	0x6c, 0x61, 0x79, 0x65, 0x72, 0x73, 0x12, 0x16, 0x0a, 0x06, 0x72, 0x6f, 0x62, 0x6f, 0x74, 0x73,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x05, 0x52, 0x06, 0x72, 0x6f, 0x62, 0x6f, 0x74, 0x73, 0x22, 0x2a,
	0x0a, 0x0e, 0x52, 0x65, 0x73, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x54, 0x61, 0x62, 0x6c, 0x65,
	0x12, 0x18, 0x0a, 0x07, 0x74, 0x61, 0x62, 0x6c, 0x65, 0x4e, 0x6f, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x05, 0x52, 0x07, 0x74, 0x61, 0x62, 0x6c, 0x65, 0x4e, 0x6f, 0x22, 0x0e, 0x0a, 0x0c, 0x52, 0x65,
	0x71, 0x4a, 0x6f, 0x69, 0x6e, 0x54, 0x61, 0x62, 0x6c, 0x65, 0x22, 0x0e, 0x0a, 0x0c, 0x52, 0x65,
	0x73, 0x4a, 0x6f, 0x69, 0x6e, 0x54, 0x61, 0x62, 0x6c, 0x65, 0x42, 0x0b, 0x5a, 0x09, 0x2e, 0x2f,
	0x61, 0x70, 0x69, 0x3b, 0x61, 0x70, 0x69, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_poker_proto_rawDescOnce sync.Once
	file_poker_proto_rawDescData = file_poker_proto_rawDesc
)

func file_poker_proto_rawDescGZIP() []byte {
	file_poker_proto_rawDescOnce.Do(func() {
		file_poker_proto_rawDescData = protoimpl.X.CompressGZIP(file_poker_proto_rawDescData)
	})
	return file_poker_proto_rawDescData
}

var file_poker_proto_msgTypes = make([]protoimpl.MessageInfo, 13)
var file_poker_proto_goTypes = []interface{}{
	(*ProtoWrap)(nil),      // 0: api.ProtoWrap
	(*Ping)(nil),           // 1: api.Ping
	(*Pong)(nil),           // 2: api.Pong
	(*ResSuccess)(nil),     // 3: api.ResSuccess
	(*ResFail)(nil),        // 4: api.ResFail
	(*ReqIdentity)(nil),    // 5: api.ReqIdentity
	(*ResIdentity)(nil),    // 6: api.ResIdentity
	(*ReqLobbyView)(nil),   // 7: api.ReqLobbyView
	(*ResLobbyView)(nil),   // 8: api.ResLobbyView
	(*ReqCreateTable)(nil), // 9: api.ReqCreateTable
	(*ResCreateTable)(nil), // 10: api.ResCreateTable
	(*ReqJoinTable)(nil),   // 11: api.ReqJoinTable
	(*ResJoinTable)(nil),   // 12: api.ResJoinTable
}
var file_poker_proto_depIdxs = []int32{
	0, // [0:0] is the sub-list for method output_type
	0, // [0:0] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_poker_proto_init() }
func file_poker_proto_init() {
	if File_poker_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_poker_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ProtoWrap); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_poker_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Ping); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_poker_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Pong); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_poker_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ResSuccess); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_poker_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ResFail); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_poker_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ReqIdentity); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_poker_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ResIdentity); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_poker_proto_msgTypes[7].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ReqLobbyView); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_poker_proto_msgTypes[8].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ResLobbyView); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_poker_proto_msgTypes[9].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ReqCreateTable); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_poker_proto_msgTypes[10].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ResCreateTable); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_poker_proto_msgTypes[11].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ReqJoinTable); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_poker_proto_msgTypes[12].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ResJoinTable); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_poker_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   13,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_poker_proto_goTypes,
		DependencyIndexes: file_poker_proto_depIdxs,
		MessageInfos:      file_poker_proto_msgTypes,
	}.Build()
	File_poker_proto = out.File
	file_poker_proto_rawDesc = nil
	file_poker_proto_goTypes = nil
	file_poker_proto_depIdxs = nil
}
